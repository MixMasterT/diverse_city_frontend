/*
  Root Reducer
*/

import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import goalReducer from "./goalReducer";
import languageReducer from "./languageReducer";

export default combineReducers({
  errorReducer,
  userReducer,
  goalReducer,
  languageReducer,
});
