import { atom } from "recoil";

export const activeCategory = atom({
  key: "activeCategory",
  default: "All",
});
