import FlightDetailsActionTypes from "./flight-details.types";

export const fetchFlightDetailsStart = () => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_START
});

export const fetchFlightStatusStart = () => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_STATUS_START
});

export const fetchFlightDetailsSuccess = flightDetailsList => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_SUCCESS,
  payload: flightDetailsList
});

export const fetchFlightStatusSuccess = flightStatusList => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_STATUS_SUCCESS,
  payload: flightStatusList
});

export const fetchFailure = errorMessage => ({
  type: FlightDetailsActionTypes.FETCH_FAILURE,
  payload: errorMessage
});
