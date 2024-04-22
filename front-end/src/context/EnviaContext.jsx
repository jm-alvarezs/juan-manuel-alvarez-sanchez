import React, { createContext, useReducer } from "react";
import {
  CLEAR_ENVIA,
  LABELS_RECEIVED,
  RATES_RECEIVED,
  STATES_RECEIVED,
} from "../types/envia";
import EnviaReducer from "../reducers/EnviaReducer";
import EnviaService from "../services/EnviaService";
import { states } from "../utils/addresses";

const initialState = {
  rates: null,
  label: {},
};

export const EnviaContext = createContext(initialState);

export const EnviaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EnviaReducer, initialState);

  const clearEnvia = () => {
    dispatch({ type: CLEAR_ENVIA });
  };

  const getStates = () => {
    EnviaService.getStates("MX")
      .then((res) => {
        const { data } = res.data;
        dispatch({ type: STATES_RECEIVED, payload: data });
      })
      .catch((error) => {
        dispatch({ type: STATES_RECEIVED, payload: states });
      });
  };

  const getRates = (catalog_product_id, destination) => {
    EnviaService.getRates(catalog_product_id, destination).then((res) => {
      const { rates } = res.data;
      dispatch({ type: RATES_RECEIVED, payload: rates });
    });
  };
  const getLabel = (catalog_product_id, destination, shipment) => {
    const shipmentData = {
      carrier: shipment.carrier,
      service: shipment.service,
    };
    EnviaService.getShipping(
      catalog_product_id,
      destination,
      shipmentData
    ).then((res) => {
      const { labels } = res.data;
      dispatch({ type: LABELS_RECEIVED, payload: labels });
    });
  };
  return (
    <EnviaContext.Provider
      value={{ ...state, getRates, getLabel, getStates, clearEnvia }}
    >
      {children}
    </EnviaContext.Provider>
  );
};
