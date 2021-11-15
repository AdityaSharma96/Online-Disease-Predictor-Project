import { SHOW_SPINNER, HIDE_SPINNER } from "./actionTypes";

export const show_spinner = () => (dispatch) => {
  dispatch({ type: SHOW_SPINNER });
};

export const hide_spinner = () => (dispatch) => {
  dispatch({ type: HIDE_SPINNER });
};
