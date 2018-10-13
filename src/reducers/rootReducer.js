/*
  Root Reducer
*/

import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import goalReducer from "./goalReducer";

export default combineReducers({
  errorReducer,
  userReducer,
  goalReducer
});
