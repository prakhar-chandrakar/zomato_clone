import { selector } from "recoil";

export const userEmail = selector({
  key: "userEmailState",
  get: ({ get }) => {
    const state = get(userEmail);
    return state.userEmail;
  },
});
