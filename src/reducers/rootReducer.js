import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
//import menuReducer from "./menuReducer";

import { toastsReducer as toasts } from "react-toastify-redux";

export default combineReducers({
  itemReducer,
  toasts
});
