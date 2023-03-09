import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import axios from "axios";

import {
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR,
  VERIFY_SUCCESS,
  VERIFY_ERROR,
  TRANSACTION_SUCCESS,
  TRANSACTION_ERROR,
} from "../types";
const AuthState = (props) => {
  const initialState = {
    user: null,
    verify: null,
    ref: localStorage.getItem("ref"),
    trans: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = async (formData) => {
    const config = {
      headers: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    };

    try {
      const resp = await axios.post(
        "https://alvative-bg.onrender.com/initialize",
        formData,
        config
      );
      dispatch({
        type: AUTHORIZATION_SUCCESS,
        payload: resp,
      });
    } catch (error) {
      dispatch({
        type: AUTHORIZATION_ERROR,
        payload: error.resp,
      });
    }
  };

  const loadVerification = async () => {
    const ref = localStorage.getItem("ref");
    const config = {
      headers: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    };

    try {
      const resp = await axios.get(
        `https://alvative-bg.onrender.com/verification?reference=${ref}`,
        config
      );
      dispatch({
        type: VERIFY_SUCCESS,
        payload: resp,
      });
    } catch (error) {
      dispatch({
        type: VERIFY_ERROR,
        payload: error.resp,
      });
    }
  };
  const loadTransaction = async () => {
    const config = {
      headers: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    };

    try {
      const resp = await axios.get(
        "https://alvative-bg.onrender.com/get-transactions",

        config
      );
      dispatch({
        type: TRANSACTION_SUCCESS,
        payload: resp,
      });
    } catch (error) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: error.resp,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        verify: state.verify,
        trans: state.trans,
        ref: state.ref,
        loadUser,
        loadVerification,
        loadTransaction,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
