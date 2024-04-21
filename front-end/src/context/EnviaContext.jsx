import React, { createContext, useReducer } from "react";
import {
  CLEAR_ENVIA,
  LABEL_RECEIVED,
  QUOTE_RECEIVED,
  STATES_RECEIVED,
} from "../types/envia";
import EnviaReducer from "../reducers/EnviaReducer";
import EnviaService from "../services/EnviaService";

const initialState = {
  quote: {},
  label: {},
};

export const EnviaContext = createContext(initialState);

export const EnviaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EnviaReducer, initialState);

  const clearEnvia = () => {
    dispatch({ type: CLEAR_ENVIA });
  };

  const getStates = () => {
    EnviaService.getStates("MX").then((res) => {
      const { data } = res.data;
      dispatch({ type: STATES_RECEIVED, payload: data });
    });
  };

  const getQuote = (destination) => {
    EnviaService.getQuote(destination).then((res) => {
      const { quote } = res.data;
      dispatch({ type: QUOTE_RECEIVED, payload: quote });
    });
  };
  const getLabel = (data) => {
    EnviaService.getQuote(data).then((res) => {
      const { quote } = res.data;
      dispatch({ type: LABEL_RECEIVED, payload: quote });
    });
  };
  return (
    <EnviaContext.Provider
      value={{ ...state, getQuote, getLabel, getStates, clearEnvia }}
    >
      {children}
    </EnviaContext.Provider>
  );
};
