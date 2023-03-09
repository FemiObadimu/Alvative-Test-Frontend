import {
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR,
  VERIFY_SUCCESS,
  VERIFY_ERROR,
  TRANSACTION_SUCCESS,
  TRANSACTION_ERROR,
} from "../types";

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case AUTHORIZATION_SUCCESS:
      localStorage.setItem("ref", payload.data.response.data.reference);
      window.location.href = `${payload.data.response.data.authorization_url}`;
      return {
        ...state,
        user: payload.data,
        ref: payload.data.response.data.reference,
      };

    case AUTHORIZATION_ERROR:
      localStorage.removeItem("ref");
      return {
        ...state,
        user: null,
      };

    case VERIFY_SUCCESS:
      return {
        ...state,
        verify: payload.data,
      };

    case VERIFY_ERROR:
      return {
        ...state,
        verify: null,
      };
    case TRANSACTION_SUCCESS:
      localStorage.removeItem("ref");
      return {
        ...state,
        trans: payload.data,
      };

    case TRANSACTION_ERROR:
      return {
        ...state,
        trans: null,
      };

    default:
      return state;
  }
};

export default authReducer;
