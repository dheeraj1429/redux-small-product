import { ActionType } from "../Contants/actionType";

const initalState = {
  AllProducts: [],
};

export const productsReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};
