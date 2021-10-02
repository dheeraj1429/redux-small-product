import { combineReducers } from "redux";
import { productsReducer } from "./reducer";

const rootReducer = combineReducers({
  allProducts: productsReducer,
});

export default rootReducer;
