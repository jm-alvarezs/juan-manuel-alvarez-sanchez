import React, { createContext, useContext, useReducer } from "react";
import AuthService from "../services/AuthService";
import AdjuntosService from "../services/AdjuntosService";
import UserReducer from "../reducers/UserReducer";
import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  LOGIN,
  LOGOUT,
  SET_PROPIEDAD_USER,
  GUARDAR_USUARIO,
  EDITAR_USUARIO,
  LEGACY_CUSTOMER,
} from "../types";
import { ModalContext } from "./ModalContext";
import CustomerService from "../services/CustomerService";
import { navigate } from "@reach/router";

const initialState = {
  user: null,
  correo: null,
  password: null,
  telefono: null,
  cuenta: null,
  direccion: null,
  spinner: false,
  legacy: null,
};

export const AuthContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const { success, alert } = useContext(ModalContext);

  function isLegacyCustomer(email) {
    CustomerService.isLegacyCustomer(email)
      .then(() => {
        dispatch({ type: LEGACY_CUSTOMER, payload: true });
        setTimeout(() => {
          AuthService.recoverPassword(email);
        }, 3000);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            navigate("/registro");
          } else if (error.response.status === 412) {
            dispatch({ type: LEGACY_CUSTOMER, payload: false });
          }
        }
      });
  }

  function setLegacy() {
    dispatch({ type: LEGACY_CUSTOMER, payload: false });
  }

  function signIn(email, password, callback) {
    dispatch({ type: SHOW_SPINNER });
    AuthService.signIn(email, password)
      .then((user) => {
        if (user) {
          CustomerService.getCurrentCustomer()
            .then((res) => {
              let { customer } = res.data;
              dispatch({
                type: LOGIN,
                payload: customer,
              });
              if (typeof callback === "function") {
                callback();
              }
            })
            .catch((error) => {
              if (error.response) {
                if (error.response.status !== 400) {
                  AuthService.signOut();
                  return alert(error.toString());
                }
              }
              alert(error);
              AuthService.signOut();
            });
        } else {
          alert(
            "Ya tienes cuenta con nosotros pero la contraseña es incorrecta. Por favor, intenta de nuevo"
          );
          dispatch({ type: HIDE_SPINNER });
          AuthService.signOut();
        }
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert(
            "Lo sentimos. No encontramos una cuenta con ese correo. ¡Regístrate!"
          );
        }
        if (error.code === "auth/wrong-password") {
          alert("La contraseña es incorrecta. Por favor, intenta de nuevo");
        } else {
          alert(error.toString());
        }
        dispatch({ type: HIDE_SPINNER });
      });
  }

  function userLoggedIn() {
    dispatch({ type: SHOW_SPINNER });
    AuthService.userLoggedIn(
      (user) => {
        CustomerService.getCurrentCustomer()
          .then((res) => {
            let { customer } = res.data;
            dispatch({
              type: LOGIN,
              payload: customer,
            });
            dispatch({ type: HIDE_SPINNER });
          })
          .catch((error) => {
            alert(error);
            AuthService.signOut();
          });
      },
      (error) => {
        if (error) {
          alert(error);
          AuthService.signOut();
          navigate("/entrar");
        }
        dispatch({ type: HIDE_SPINNER });
      }
    );
  }

  function signOut() {
    AuthService.signOut()
      .then(() => {
        dispatch({ type: LOGOUT });
        navigate("/entrar");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function signUp(
    nombre,
    apellidos,
    correo,
    password,
    telefono,
    reason,
    callback
  ) {
    dispatch({ type: SHOW_SPINNER });
    AuthService.signUp(correo, password)
      .then((user) => {
        const uid = user.user.uid;
        CustomerService.signUp(nombre, apellidos, correo, telefono, uid, reason)
          .then(() => {
            signIn(correo, password, callback);
          })
          .catch((error) => {
            dispatch({ type: HIDE_SPINNER });
            if (error.response) {
              if (error.response.status === 412) {
                return alert(
                  "Ya tienes una cuenta con nosotros. Inicia sesión."
                );
              }
            }
            alert(error);
          });
      })
      .catch((error) => {
        dispatch({ type: HIDE_SPINNER });
        if (error.code) {
          if (
            error.code === "auth/email-already-exists" ||
            error.code === "auth/email-already-in-use"
          ) {
            return alert("Ya tienes una cuenta con nosotros. Inicia sesión.");
          }
        }
        alert(error);
      });
  }

  function getUsuario() {
    CustomerService.getCurrentCustomer().then((res) => {
      const { customer } = res.data;
      dispatch({ type: LOGIN, payload: customer });
    });
  }

  function editarUsuario() {
    dispatch({ type: EDITAR_USUARIO });
  }

  function cancelEdit() {
    dispatch({ type: GUARDAR_USUARIO });
  }

  function setPropiedadUser(key, value) {
    if (key === "idAdjunto") {
      dispatch({ type: SET_PROPIEDAD_USER, payload: { key: "file", value } });
      if (!value)
        dispatch({ type: SET_PROPIEDAD_USER, payload: { key, value } });
    } else {
      if (key === "telefono") {
        value = String(value).replace(/\D/g, "");
        value = String(value).substring(0, 10);
      }
      dispatch({ type: SET_PROPIEDAD_USER, payload: { key, value } });
    }
  }

  function recoverPassword(email) {
    AuthService.recoverPassword(email)
      .then(() => {
        success("Te hemos enviado un correo para reestablecer tu contraseña.");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          CustomerService.recoverPassword(email).then(() => {
            success(
              "¡Te hemos enviado un correo para reestablecer tu contraseña!"
            );
          });
        } else {
          alert("Hubo un error al enviar el correo. Inténtalo más tarde.");
        }
      });
  }

  function updateUsuario(usuario, showAlert) {
    const promises = [];
    if (usuario.picture && usuario.picture !== null) {
      if (usuario.picture) {
        const promiseAdjunto = new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("file", usuario.picture);
          AdjuntosService.postAdjunto(formData).then((res) => {
            const { file_id } = res.data;
            usuario.file_id = file_id;
            resolve();
          });
        });
        promises.push(promiseAdjunto);
      }
    }
    Promise.all(promises).then(() => {
      const data = { ...usuario };
      delete data.file;
      delete data.uid;
      delete data.activo;
      CustomerService.putCurrentCustomer(data)
        .then((res) => {
          dispatch({ type: GUARDAR_USUARIO });
          if (showAlert || showAlert === undefined) {
            success("Perfil actualizado con éxito.");
          }
          getUsuario();
        })
        .catch((error) => {
          alert(error);
        });
    });
  }

  const verifyEmail = () => {
    AuthService.verifyEmail().then(() => {
      success("Te enviamos un correo para confirmar tu dirección");
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signOut,
        setLegacy,
        getUsuario,
        cancelEdit,
        verifyEmail,
        userLoggedIn,
        updateUsuario,
        editarUsuario,
        isLegacyCustomer,
        recoverPassword,
        setPropiedadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
