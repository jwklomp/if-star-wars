import ky from "ky";
//
import { Starship } from "./starshipTypes.ts";

interface ApiResponse {
  results: Array<Starship>;
}

export const fetchStarshipsData = async (): Promise<Array<Starship>> => {
  const response = await ky.get("https://swapi.dev/api/starships/");
  const data: ApiResponse = await response.json();
  return data.results;
};
