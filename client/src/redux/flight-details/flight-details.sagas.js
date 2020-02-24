import { all, call, takeLatest, put, select } from "redux-saga/effects";
import axios from "axios";
import FlightDetailsActionTypes from "./flight-details.types";
import { selectAuthToken } from "../auth/auth.selectors";
import {
  fetchFlightDetailsSuccess,
  fetchFlightStatusSuccess,
  asyncOperationFlightStatusFailure
} from "./flight-details.actions";
import config from "../../config";

axios.defaults.baseURL = config.apiBaseUrl;

export function* fetchFlightDetailsAsync() {
  const token = yield select(selectAuthToken);
  try {
    const response = yield axios.get("/flight-details", {
      headers: { Authorization: token }
    });
    yield put(fetchFlightDetailsSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(asyncOperationFlightStatusFailure(error.message));
  }
}

export function* fetchFlighStatusAsync() {
  const token = yield select(selectAuthToken);
  try {
    const response = yield axios.get("/flight-details/status", {
      headers: { Authorization: token }
    });
    yield put(fetchFlightStatusSuccess(response.data.status));
  } catch (error) {
    console.error(error);
    yield put(asyncOperationFlightStatusFailure(error.message));
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
