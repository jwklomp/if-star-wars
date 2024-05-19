import ky from "ky";
//
import { Person } from "./peopleTypes.ts";

interface ApiResponse {
  results: Array<Person>;
}

export const fetchPeopleData = async (): Promise<Array<Person>> => {
  const response = await ky.get("https://swapi.dev/api/people/");
  const data: ApiResponse = await response.json();
  return data.results;
};
