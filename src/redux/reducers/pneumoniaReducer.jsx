// action types
import {
  PREDICT_PNEUMONIA,
  PAST_RECORDS_PNEUMONIA,
  SINGLE_RECORD_PNEUMONIA,
} from "../actions/actionTypes";

const inititalState = {
  Prediction: 0,
  Accuracy: 0,
};

export const pneumoniaReducer = (state = inititalState, action) => {
  switch (action.type) {
    case PREDICT_PNEUMONIA:
      return action.payload;
    default:
      return state;
  }
};

const initialState2 = [
  {
    date: "",
    input: "",
    result: {
      Prediction: 0,
      Accuracy: 0,
    },
  },
];

export const pastPneumoniaReducer = (state = initialState2, action) => {
  switch (action.type) {
    case PAST_RECORDS_PNEUMONIA:
      return action.payload;
    default:
      return state;
  }
};

export const singlePneumoniaReducer = (state = initialState2[0], action) => {
  switch (action.type) {
    case SINGLE_RECORD_PNEUMONIA:
      return action.payload;
    default:
      return state;
  }
};
