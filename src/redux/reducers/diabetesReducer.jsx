// action types
import {
  PAST_RECORDS_DIABETES,
  PREDICT_DIABETES_4,
  PREDICT_DIABETES_8,
  SINGLE_RECORD_DIABETES,
} from "../actions/actionTypes";

const initialState = {
  RandomForestNormal: 0,
  RandomForestUnskewed: 0,
  KNNUnskewed: 0,
  Ones: 0,
};

export const diabetesReducer = (details = initialState, action) => {
  switch (action.type) {
    case PREDICT_DIABETES_4:
    case PREDICT_DIABETES_8:
      return action.payload;
    default:
      return details;
  }
};

const initialState2 = [
  {
    date: "",
    input: {
      pregnancies: 0,
      glucose: 0,
      bp: 0,
      skin_thickness: 0,
      insulin: 0,
      bmi: 0,
      dp_function: "0.130",
      age: 0,
    },
    result: {
      RandomForestNormal: 0,
      RandomForestUnskewed: 0,
      KNNUnskewed: 0,
      Ones: 0,
    },
  },
];

export const pastDiabetesReducer = (state = initialState2, action) => {
  switch (action.type) {
    case PAST_RECORDS_DIABETES:
      return action.payload;
    default:
      return state;
  }
};

export const singleDiabetesReducer = (state = initialState2[0], action) => {
  switch (action.type) {
    case SINGLE_RECORD_DIABETES:
      return action.payload;
    default:
      return state;
  }
};
