import { ActionType } from "../Contants/ActionType";

const initalState = {
  allProducts: [],
};

export const userReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCT: {
      return {
        ...state,
        allProducts: payload,
      };
    }
    default:
      return state;
  }
};

export const setProductOne = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT: {
      return {
        ...state,
        product: payload,
      };
    }
    default:
      return state;
  }
};
