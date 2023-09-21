import type { NextApiRequest, NextApiResponse } from "next";
import cities from "database/cities.json";
import { MAX_RESULTS } from "utils/consts";
import { simulateDelay } from "utils/helper";

/**
 * Filter city names based on the search query.
 */
function filterCities(query: string): string[] {
  const lowerCaseQuery = query.toLowerCase();
  return cities
    .map(([city]) => city as string)
    .filter((city) => city.toLowerCase().includes(lowerCaseQuery))
    .slice(0, MAX_RESULTS);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await simulateDelay(800);

    if (!req.query.search || typeof req.query.search !== "string") {
      return res.status(400).json({
        status: "error",
        message: "Invalid or missing 'search' parameter.",
      });
    }

    const query = req.query.search;

    if (query.toLowerCase() === "fail") {
      throw new Error(`City "${query}" not found.`);
    }

    const filteredCities = filterCities(query);

    return res.json({
      status: "success",
      data: filteredCities,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
