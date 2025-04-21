import ky from "ky";
//
import { SWAPI_BASE_URL } from "../common/utils.tsx";
//
import { Person } from "./peopleTypes.ts";

type SwapiTechListResponse = {
  results: Array<{
    uid: string;
    name: string;
    url: string;
  }>;
};

type SwapiTechDetailResponse = {
  result: {
    properties: Person;
  };
};

export const fetchPeopleData = async (): Promise<Array<Person>> => {
  const response = await ky.get(`${SWAPI_BASE_URL}/people`);
  const data: SwapiTechListResponse = await response.json();

  return await Promise.all(
    data.results.map(async ({ url }) => {
      const detailResponse = await ky.get(url);
      const detailData: SwapiTechDetailResponse = await detailResponse.json();
      return detailData.result.properties;
    }),
  );
};
