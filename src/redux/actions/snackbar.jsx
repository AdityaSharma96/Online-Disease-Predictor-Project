import {
  INFO_SNACKBAR,
  SUCCESS_SNACKBAR,
  FAILURE_SNACKBAR,
  HIDE_SNACKBAR,
} from "./actionTypes";

export const info_snackbar = (message) => (dispatch) => {
  dispatch({ type: INFO_SNACKBAR, message });
};

export const success_snackbar = (message) => (dispatch) => {
  dispatch({ type: SUCCESS_SNACKBAR, message });
};

export const failure_snackbar = (message) => (dispatch) => {
  dispatch({ type: FAILURE_SNACKBAR, message });
};

export const hide_snackbar = () => (dispatch) => {
  dispatch({ type: HIDE_SNACKBAR });
};
