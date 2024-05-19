import { atom } from "recoil";
//
import { Profile } from "./profileTypes.ts";

export const profileAtom = atom<Profile | null>({
  key: "profileAtom",
  default: null,
});
