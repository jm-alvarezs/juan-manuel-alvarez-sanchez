import React, { createContext, useReducer } from "react";
import AddressReducer from "../reducers/AddressReducer";
import { CREATE_ADDRESS, SET_PROPERTY_ADDRESS } from "../types/addresses";

const initialState = {
  addresses: null,
  address: null,
};

export const AddressContext = createContext(initialState);

export const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AddressReducer, initialState);

  const createAddress = () => {
    dispatch({ type: CREATE_ADDRESS });
  };

  const setPropertyAddress = (key, value) => {
    dispatch({ type: SET_PROPERTY_ADDRESS, payload: { key, value } });
  };

  return (
    <AddressContext.Provider
      value={{
        ...state,
        createAddress,
        setPropertyAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
