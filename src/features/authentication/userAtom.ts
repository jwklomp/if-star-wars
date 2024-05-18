import { atom } from "recoil";

export interface User {
  access_token: string;
}

export const userAtom = atom<User | null>({
  key: "userAtom",
  default: null,
});
