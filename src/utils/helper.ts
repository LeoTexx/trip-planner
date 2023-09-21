import { City } from "types";
import { EARTH_RADIUS_KM } from "./consts";

/**
 * Convert degrees to radians.
 * @param degrees - Angle in degrees
 * @returns Angle in radians
 */
function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Calculate the distance between two cities using the Haversine formula.
 * @param cityA - First city
 * @param cityB - Second city
 * @returns Distance in kilometers between cityA and cityB
 */
export function haversineDistance(cityA: City, cityB: City): number {
  const deltaLatitude = degreesToRadians(cityB.lat - cityA.lat);
  const deltaLongitude = degreesToRadians(cityB.lon - cityA.lon);

  const latitudeA = degreesToRadians(cityA.lat);
  const latitudeB = degreesToRadians(cityB.lat);

  const a =
    Math.sin(deltaLatitude / 2) ** 2 +
    Math.sin(deltaLongitude / 2) ** 2 *
      Math.cos(latitudeA) *
      Math.cos(latitudeB);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_KM * c;
}

/**
 * Simulate a delay for asynchronous operations (for testing and mock purposes).
 * @param ms - Delay in milliseconds
 * @returns A promise that resolves after the specified delay
 */
export function simulateDelay(ms: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}
