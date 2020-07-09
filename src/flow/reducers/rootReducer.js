import {
  updateUser,
  updatePatner,
  updateCallStatus,
  updateRoomId,
} from "../actions";

const initialState = {
  user: "",
  callStatus: "join",
  patner: null,
  roomId: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateUser:
      return {
        ...state,
        user: action.payload,
      };

    case updateCallStatus:
      return {
        ...state,
        callStatus: action.payload,
      };

    case updatePatner:
      return {
        ...state,
        patner: action.payload,
      };

    case updateRoomId:
      return {
        ...state,
        roomId: action.payload,
      };

    default:
      return state;
  }
};
