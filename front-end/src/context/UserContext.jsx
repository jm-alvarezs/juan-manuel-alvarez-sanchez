import React, { createContext, useReducer } from "react";
import UserReducer from "../reducers/UserReducer";
import UserSevice from "../services/UserSevice";
import { SET_TOKEN } from "../types/users";

const initialState = {
  token: null,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getTokenByPhone = (phone) => {
    UserSevice.getUser(phone).then((res) => {
      const { user } = res.data;
      if (user.access_token && user.access_token !== null) {
        const { token } = user.access_token;
        dispatch({ type: SET_TOKEN, payload: token });
        UserSevice.setToken(token);
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        getTokenByPhone,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
