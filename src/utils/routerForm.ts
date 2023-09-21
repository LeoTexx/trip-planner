import moment from "moment";
import { FormValues, Router } from "types";

export const extractDefaultValuesFromRouter = (router: Router) => {
  const cities = getCitiesFromQuery(router.query.cities);
  const passengers = Number(router.query.passengers) || 0;
  const date = typeof router.query.date === "string" ? router.query.date : "";

  return { cities, passengers, date };
};

export const getCitiesFromQuery = (
  citiesQuery?: string | string[]
): string[] => {
  if (Array.isArray(citiesQuery)) {
    return citiesQuery.filter((city) => city);
  }

  return typeof citiesQuery === "string" ? [citiesQuery] : [];
};

export const extractRouteData = (values: FormValues, keys: string[]) => {
  const destinations = keys.map((key) => values.destinations[key]);
  const route = [values.origin, ...destinations];
  const { passengers, date } = values;

  return { route, passengers, date };
};

export const updateRouterWithFormValues = (
  router: Router,
  values: FormValues,
  keys: string[]
) => {
  router.push({
    pathname: router.pathname,
    query: {
      cities: getCities(values, keys),
      passengers: values.passengers,
      date: values.date ? moment(values.date).format("YYYY-MM-DD") : undefined,
    },
  });
};

export const getCities = (values: FormValues, keys: string[]) => {
  const destinations = keys.map((key) => values.destinations[key]);
  return [values.origin, ...destinations];
};
