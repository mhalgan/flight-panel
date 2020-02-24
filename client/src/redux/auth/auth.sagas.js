import { all, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import AuthActionTypes from "./auth.types";
import { authSuccess, authFailure } from "./auth.actions";
import config from "../../config";

axios.defaults.baseURL = config.apiBaseUrl;

export function* authAsync() {
  try {
    const response = yield axios.post("/auth/login");
    yield put(authSuccess(response.data.token));
  } catch (error) {
    console.error(error);
    yield put(authFailure(error.message));
  }
}

export function* onAuthStart() {
  yield takeLatest(AuthActionTypes.AUTH_START, authAsync);
}

export function* authSagas() {
  yield all([call(onAuthStart)]);
}
