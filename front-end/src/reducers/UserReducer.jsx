import { SET_TOKEN } from "../types/users";

const EnviaReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload };
    default:
      return { ...state };
  }
};

export default EnviaReducer;
