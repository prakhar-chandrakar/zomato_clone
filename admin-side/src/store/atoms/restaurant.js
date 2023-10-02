import { atom } from "recoil";

export const restaurantState = atom({
  key: "restaurantState",
  default: {
    isLoadind: true,
    restaurant: {},
  },
});
