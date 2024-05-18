import { atom } from "recoil";
//
import { Person } from "./peopleTypes.ts";

export const peopleState = atom<Array<Person>>({
  key: "peopleState",
  default: [],
});
