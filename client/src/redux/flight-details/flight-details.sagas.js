import { all, call, takeLatest, put, select } from "redux-saga/effects";
import axios from "axios";
import FlightDetailsActionTypes from "./flight-details.types";
import { selectAuthToken } from "../auth/auth.selectors";
import {
  fetchFlightDetailsSuccess,
  fetchFlightStatusSuccess,
  updateFlightDetailsSuccess,
  deleteFlightDetailsSuccess,
  fetchFlightDetailsStart,
  asyncOperationFlightDetailsFailure
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
    yield put(asyncOperationFlightDetailsFailure(error.message));
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
    yield put(asyncOperationFlightDetailsFailure(error.message));
  }
}

export function* updateFlighDetailsAsync({ payload }) {
  const token = yield select(selectAuthToken);
  try {
    const id = payload._id;
    yield axios.put(`/flight-details/${id}`, payload, {
      headers: { Authorization: token }
    });
    yield put(updateFlightDetailsSuccess());
    yield put(fetchFlightDetailsStart());
  } catch (error) {
    console.error(error);
    yield put(asyncOperationFlightDetailsFailure(error.message));
  }
}

export function* deleteFlighDetailsAsync({ payload }) {
  const token = yield select(selectAuthToken);
  try {
    const id = payload._id;
    yield axios.delete(`/flight-details/${id}`, {
      headers: { Authorization: token }
    });
    yield put(deleteFlightDetailsSuccess());
    yield put(fetchFlightDetailsStart());
  } catch (error) {
    console.error(error);
    yield put(asyncOperationFlightDetailsFailure(error.message));
  }
}

// Listeners
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

export function* onUpdateFlightDetailsStart() {
  yield takeLatest(
    FlightDetailsActionTypes.UPDATE_FLIGHT_DETAILS_START,
    updateFlighDetailsAsync
  );
}

export function* onDeleteFlightDetailsStart() {
  yield takeLatest(
    FlightDetailsActionTypes.DELETE_FLIGHT_DETAILS_START,
    deleteFlighDetailsAsync
  );
}

export function* flightDetailsSagas() {
  yield all([
    call(onFetchFlightDetailsStart),
    call(onFetchFlightStatusStart),
    call(onUpdateFlightDetailsStart),
    call(onDeleteFlightDetailsStart)
  ]);
}
