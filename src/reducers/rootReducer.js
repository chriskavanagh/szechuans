import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
//import menuReducer from "./menuReducer";
import foodReducer from "./foodReducer";
import { toastsReducer as toasts } from "react-toastify-redux";

export default combineReducers({
  itemReducer,
  foodReducer,
  toasts
});
