import citiesData from "database/cities.json";
import type { NextApiRequest, NextApiResponse } from "next";
import { City, Path } from "types";
import { haversineDistance, simulateDelay } from "utils/helper";

/**
 * Find and return city details by city name.
 */
function findCity(cityName: string): City {
  const cityData = citiesData.find(([city]) => city === cityName);
  if (!cityData) {
    throw new Error(`City ${cityName} not found!`);
  }
  return {
    name: cityData[0] as string,
    lat: cityData[1] as number,
    lon: cityData[2] as number,
  };
}

/**
 * Calculate distances between a list of cities.
 */
function calculateDistances(cities: string[]): Path[] {
  const distances: Path[] = [];
  for (let i = 0; i < cities.length - 1; i++) {
    const cityA = findCity(cities[i]);
    const cityB = findCity(cities[i + 1]);
    const distance = haversineDistance(cityA, cityB);
    distances.push({
      from: cityA.name,
      to: cityB.name,
      distance: Number(distance.toFixed(2)),
    });
  }
  return distances;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await simulateDelay(1500);

    if (!req.body.cities || !Array.isArray(req.body.cities)) {
      throw new Error("Invalid cities input");
    }

    const cities = req.body.cities as string[];

    if (cities.includes("Dijon")) {
      throw new Error("Oops! Something went wrong with the city Dijon!");
    }

    const distances = calculateDistances(cities);
    return res.json({
      status: "success",
      data: distances,
    });
  } catch (error: any) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
}
