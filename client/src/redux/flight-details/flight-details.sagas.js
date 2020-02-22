import { all, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import FlightDetailsActionTypes from "./flight-details.types";
import {
  fetchFlightDetailsSuccess,
  fetchFlightDetailsFailure
} from "./flight-details.actions";

axios.defaults.baseURL = "http://localhost:5000/api";

export function* fetchFlightDetailsAsync() {
  try {
    const response = yield axios.get("/flight-details/123");
    yield put(fetchFlightDetailsSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(fetchFlightDetailsFailure(error.message));
  }
}

export function* onFetchFlightDetailsStart() {
  yield takeLatest(
    FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_START,
    fetchFlightDetailsAsync
  );
}

export function* flightDetailsSagas() {
  yield all([call(onFetchFlightDetailsStart)]);
}
