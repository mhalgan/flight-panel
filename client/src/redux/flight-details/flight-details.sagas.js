import { all, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import FlightDetailsActionTypes from "./flight-details.types";
import {
  fetchFlightDetailsSuccess,
  fetchFlightStatusSuccess,
  fetchFailure
} from "./flight-details.actions";
import config from "../../config";

axios.defaults.baseURL = config.apiBaseUrl;

export function* fetchFlightDetailsAsync() {
  try {
    const response = yield axios.get("/flight-details");
    yield put(fetchFlightDetailsSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(fetchFailure(error.message));
  }
}

export function* fetchFlighStatusAsync() {
  try {
    const response = yield axios.get("/flight-details/status");
    yield put(fetchFlightStatusSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(fetchFailure(error.message));
  }
}

export function* onFetchFlightDetailsStart() {
  yield takeLatest(
    FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_START,
    fetchFlightDetailsAsync
  );
}

export function* onFetchFlightStatusStart() {
  yield takeLatest(
    FlightDetailsActionTypes.FETCH_FLIGHT_STATUS_START,
    fetchFlighStatusAsync
  );
}

export function* flightDetailsSagas() {
  yield all([call(onFetchFlightDetailsStart), call(onFetchFlightStatusStart)]);
}
