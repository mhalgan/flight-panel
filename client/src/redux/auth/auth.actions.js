import AuthActionTypes from "./auth.types";

export const authStart = () => ({
  type: AuthActionTypes.AUTH_START
});

export const authSuccess = token => ({
  type: AuthActionTypes.AUTH_SUCCESS,
  payload: token
});

export const authFailure = errorMessage => ({
  type: AuthActionTypes.AUTH_FAILURE,
  payload: errorMessage
});
