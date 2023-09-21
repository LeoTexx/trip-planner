import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Path } from "types";
import ApiService from "services/api";

export const useResult = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    paths: Path[];
    passengers: number;
    date: string;
  }>();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const search = useCallback(async ({ route, passengers, date }: any) => {
    try {
      setLoading(true);
      const paths = await ApiService.getPaths(route);
      setResult({
        paths,
        passengers,
        date,
      });
    } catch (error: any) {
      setError(error.response?.data.message || error.message || "Error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (router.isReady) {
      search({
        date: typeof router.query.date === "string" ? router.query.date : "",
        passengers: Number(router.query.passengers) || 0,
        route: Array.isArray(router.query.cities)
          ? router.query.cities.filter((city) => city)
          : typeof router.query.cities === "string"
          ? [router.query.cities]
          : [],
      });
    }
  }, [router, search]);

  return { loading, result, error, search };
};
