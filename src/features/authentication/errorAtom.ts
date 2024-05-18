import { atom } from "recoil";

export const errorAtom = atom<string | undefined>({
  key: "errorAtom",
  default: undefined,
});
