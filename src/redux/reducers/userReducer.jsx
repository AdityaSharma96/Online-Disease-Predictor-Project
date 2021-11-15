// action types
import { REGISTER_USER } from "../actions/actionTypes";

const userReducer = (user = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    default:
      return user;
  }
};

export default userReducer;
