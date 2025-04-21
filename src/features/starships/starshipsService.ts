import ky from "ky";
//
import { SWAPI_BASE_URL } from "../common/utils.tsx";
//
import { Starship } from "./starshipTypes.ts";

interface SwapiTechListResponse {
  results: Array<{
    uid: string;
    name: string;
    url: string;
  }>;
}

interface SwapiTechDetailResponse {
  result: {
    properties: Starship;
  };
}

export const fetchStarshipsData = async (): Promise<Array<Starship>> => {
  const response = await ky.get(`${SWAPI_BASE_URL}/starships`);
  const data: SwapiTechListResponse = await response.json();

  return await Promise.all(
    data.results.map(async ({ url }) => {
      const detailResponse = await ky.get(url);
      const detailData: SwapiTechDetailResponse = await detailResponse.json();
      return detailData.result.properties;
    }),
  );
};
