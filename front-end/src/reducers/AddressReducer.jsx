import {
  SET_ADDRESS,
  CREATE_ADDRESS,
  SET_PROPERTY_ADDRESS,
} from "../types/addresses";

const schema = {};

const addressesReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_ADDRESS:
      return { ...state, address: payload };
    case CREATE_ADDRESS:
      return { ...state, address: schema };
    case SET_PROPERTY_ADDRESS: {
      const { key, value } = payload;
      const address = { ...state.address };
      address[key] = value;
      return { ...state, address };
    }
    default:
      return { ...state };
  }
};

export default addressesReducer;
