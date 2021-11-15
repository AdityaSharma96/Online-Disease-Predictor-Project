// action types
import {
  SUCCESS_SNACKBAR,
  FAILURE_SNACKBAR,
  HIDE_SNACKBAR,
  INFO_SNACKBAR,
} from "../actions/actionTypes";

const initialState = {
  snackbarOpen: false,
  snackbarColor: "",
  snackbarMessage: "",
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO_SNACKBAR:
      return {
        snackbarOpen: true,
        snackbarSeverity: "info",
        snackbarMessage: action.message,
      };
    case SUCCESS_SNACKBAR:
      return {
        snackbarOpen: true,
        snackbarSeverity: "success",
        snackbarMessage: action.message,
      };
    case FAILURE_SNACKBAR:
      return {
        ...state,
        snackbarOpen: true,
        snackbarSeverity: "error",
        snackbarMessage: action.message,
      };
    case HIDE_SNACKBAR:
      return initialState;
    default:
      return state;
  }
};

export default snackbarReducer;
