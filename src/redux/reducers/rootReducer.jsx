import { combineReducers } from "redux";
import userReducer from "./userReducer";
import {
  diabetesReducer,
  pastDiabetesReducer,
  singleDiabetesReducer,
} from "./diabetesReducer";
import {
  pneumoniaReducer,
  pastPneumoniaReducer,
  singlePneumoniaReducer,
} from "./pneumoniaReducer";
import snackbarReducer from "./snackbarReducer";
import spinnerReducer from "./spinnerReducer";

export default combineReducers({
  userReducer,
  snackbarReducer,
  spinnerReducer,
  diabetesReducer,
  pastDiabetesReducer,
  singleDiabetesReducer,
  pneumoniaReducer,
  pastPneumoniaReducer,
  singlePneumoniaReducer,
});
