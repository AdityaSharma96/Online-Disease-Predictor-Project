// action types
import { SHOW_SPINNER, HIDE_SPINNER } from "../actions/actionTypes";

const initialState = {
  spinnerOpen: false,
};

const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        spinnerOpen: true,
      };
    case HIDE_SPINNER:
      return {
        spinnerOpen: false,
      };
    default:
      return state;
  }
};

export default spinnerReducer;
