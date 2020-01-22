import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import menuReducer from "./menuReducer";

export default combineReducers({
  itemReducer,
  menuReducer
});
