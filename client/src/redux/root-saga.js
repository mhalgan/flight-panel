import { all, call } from "redux-saga/effects";
import { flightDetailsSagas } from "./flight-details/flight-details.sagas";

export default function* rootSaga() {
  yield all([call(flightDetailsSagas)]);
}
