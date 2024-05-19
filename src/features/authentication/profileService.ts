import ky from "ky";
//
import { Profile } from "./profileTypes.ts";

export const fetchProfile = async (accessToken: string): Promise<Profile> => {
  const response = await ky.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    },
  );
  return await response.json();
};
