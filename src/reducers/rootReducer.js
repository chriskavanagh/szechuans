import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import menuReducer from "./menuReducer";
import foodReducer from "./foodReducer";

export default combineReducers({
  itemReducer,
  menuReducer,
  foodReducer
});
