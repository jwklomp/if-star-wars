import { atom } from "recoil";
//
import { Starship } from "./starshipTypes.ts";

export const starshipsState = atom<Array<Starship>>({
  key: "starshipsState",
  default: [],
});
