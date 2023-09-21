import { useState, useCallback, useEffect } from "react";
import ApiService from "services/api";

const DEFAULT_ERROR_MESSAGE = "Oops! Failed to search with this keyword.";

export const useLocation = (initialValue: string) => {
  const [term, setTerm] = useState(initialValue);
  const [options, setOptions] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState<string | undefined>(undefined);

  const fetchLocations = useCallback(async (query: string) => {
    try {
      setFetching(true);
      setFetchError(undefined);
      const locations = await ApiService.getLocations(query);
      if (locations.length <= 0) {
        throw new Error();
      } else {
        setOptions(locations);
      }
    } catch (error: any) {
      const API_ERROR_MESSAGE = error.response?.data.message;
      setFetchError(API_ERROR_MESSAGE || DEFAULT_ERROR_MESSAGE);
      setOptions([]);
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    if (term) {
      fetchLocations(term);
    }
  }, [fetchLocations, term]);

  return {
    term,
    options,
    fetching,
    fetchError,
    setTerm,
  };
};
