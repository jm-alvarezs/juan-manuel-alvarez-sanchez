import {
  CLEAR_ENVIA,
  LABEL_RECEIVED,
  QUOTE_RECEIVED,
  STATES_RECEIVED,
} from "../types/envia";

const EnviaReducer = (state, { type, payload }) => {
  switch (type) {
    case CLEAR_ENVIA:
      return { ...state, origin: {}, destination: {}, quote: {}, label: {} };
    case QUOTE_RECEIVED:
      return { ...state, quote: payload };
    case LABEL_RECEIVED:
      return { ...state, label: payload };
    case STATES_RECEIVED:
      return { ...state, states: payload };
    default:
      return { ...state };
  }
};

export default EnviaReducer;
