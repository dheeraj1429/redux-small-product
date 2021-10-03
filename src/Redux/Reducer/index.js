import { combineReducers } from "redux";
import { userReducer } from "./reducer";
import { setProductOne } from "./reducer";

const rootReducer = combineReducers({
  AllData: userReducer,
  products: setProductOne,
});

export default rootReducer;
