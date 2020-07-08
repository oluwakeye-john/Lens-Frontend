import { updateUser, updateIsLoggedIn } from "../actions";
const initialState = {
  user: {},
  isLoggedIn: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateUser:
      return {
        ...state,
        user: action.payload,
      };

    case updateIsLoggedIn:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      return state;
  }
};
