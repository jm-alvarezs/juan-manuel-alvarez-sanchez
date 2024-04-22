import {
  CLEAR_ENVIA,
  LABELS_RECEIVED,
  RATES_RECEIVED,
  STATES_RECEIVED,
} from "../types/envia";

const EnviaReducer = (state, { type, payload }) => {
  switch (type) {
    case CLEAR_ENVIA:
      return { ...state, origin: {}, destination: {}, rate: {}, label: {} };
    case RATES_RECEIVED:
      return { ...state, rates: payload };
    case LABELS_RECEIVED:
      return { ...state, labels: payload };
    case STATES_RECEIVED:
      return { ...state, states: payload };
    default:
      return { ...state };
  }
};

export default EnviaReducer;
