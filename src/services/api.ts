import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default class ApiService {
  /**
   * Fetch paths (distances) between cities.
   * @param cities - Array of city names
   * @returns Array of distances between the given cities
   */
  static async getPaths(cities: string[]): Promise<any> {
    const response = await apiClient.post("/api/distances", { cities });
    return response.data.data;
  }

  /**
   * Fetch locations based on a query.
   * @param query - Search term for the city name
   * @returns Array of city names that match the query
   */
  static async getLocations(query: string): Promise<any> {
    const response = await apiClient.get("/api/cities", {
      params: { search: query },
    });
    return response.data.data;
  }
}
