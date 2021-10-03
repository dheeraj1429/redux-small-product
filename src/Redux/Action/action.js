import { ActionType } from "../Contants/ActionType";
export const setProduct = (products) => {
  return {
    type: ActionType.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};
