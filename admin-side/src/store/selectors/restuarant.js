import { selector } from "recoil";
import { restaurantState } from "../atoms/restaurant";

export const isRestaurantLoading = selector({
  key: "isRestaurantLoadingState",
  get: ({ get }) => {
    const state = get(restaurantState);
    return state.isLoadind;
  },
});

export const restaurantDetails = selector({
  key: "restaurantDetailsState",
  get: ({ get }) => {
    const state = get(restaurantState);
    return state.restaurant;
  },
});

export const restaurantTitle = selector({
  key: "restaurantTitleState",
  get: ({ get }) => {
    const state = get(restaurantState);
    if (state.restaurant && state.restaurant.title) {
      return state.restaurant.title;
    } else {
      return "";
    }
  },
});

export const restaurantDescription = selector({
  key: "restaurantDescriptionState",
  get: ({ get }) => {
    const state = get(restaurantState);
    if (state.restaurant && state.restaurant.description) {
      return state.restaurant.description;
    } else {
      return "";
    }
  },
});

export const restaurantRating = selector({
  key: "restaurantRatingState",
  get: ({ get }) => {
    const state = get(restaurantState);
    if (state.restaurant && state.restaurant.rating) {
      return state.restaurant.rating;
    } else {
      return "";
    }
  },
});

export const restaurantOffer = selector({
  key: "restaurantOfferState",
  get: ({ get }) => {
    const state = get(restaurantState);
    if (state.restaurant && state.restaurant.offer) {
      return state.restaurant.offer;
    } else {
      return "";
    }
  },
});

export const restaurantImageURL = selector({
  key: "restaurantImageURLState",
  get: ({ get }) => {
    const state = get(restaurantState);
    if (state.restaurant && state.restaurant.imageURL) {
      return state.restaurant.imageURL;
    } else {
      return "";
    }
  },
});

export const restaurantFoodList = selector({
  key: "restaurantFoodList",
  get: ({ get }) => {
    const state = get(restaurantState);
    if (state.restaurant && state.restaurant.foodList) {
      return state.restaurant.foodList;
    } else {
      return [];
    }
  },
});
