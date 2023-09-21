import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import {
  extractDefaultValuesFromRouter,
  extractRouteData,
  updateRouterWithFormValues,
} from "utils/routerForm";
import { DefaultFormValues, FormValues } from "types";

export const useRouterForm = () => {
  const router = useRouter();
  const [keys, setKeys] = useState<string[]>([]);
  const [defaultValues, setDefaultValues] = useState<DefaultFormValues>({
    cities: [],
    passengers: 0,
    date: "",
  });

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      const routeData = extractRouteData(values, keys);
      router.push(
        `/result?${routeData.route
          .map((city: string) => `cities=${city}`)
          .join("&")}&passengers=${
          routeData.passengers
        }&date=${encodeURIComponent(routeData.date)}`
      );
    },
    [keys, router]
  );

  useEffect(() => {
    if (router.isReady) {
      const values = extractDefaultValuesFromRouter(router);
      setDefaultValues(values);
    }
  }, [router]);

  const handleFormUpdate = useCallback(
    (values: FormValues) => {
      updateRouterWithFormValues(router, values, keys);
    },
    [router, keys]
  );

  return {
    defaultValues,
    handleSubmit,
    handleFormUpdate,
    setKeys,
  };
};
