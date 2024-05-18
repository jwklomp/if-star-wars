import { atom } from "recoil";

export interface Profile {
  picture: string;
  name: string;
  email: string;
}

export const profileAtom = atom<Profile | null>({
  key: "profileAtom",
  default: null,
});
