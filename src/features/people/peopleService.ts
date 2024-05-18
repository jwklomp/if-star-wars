import ky from "ky";
//
import { Person } from "./peopleTypes.ts";

interface ApiResponse {
  results: Array<Person>;
  // Add more fields if necessary
}

export const fetchPeopleData = async (): Promise<Array<Person>> => {
  try {
    const response = await ky.get("https://swapi.dev/api/people/");
    const data: ApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching people data:", error);
    throw error;
  }
};
