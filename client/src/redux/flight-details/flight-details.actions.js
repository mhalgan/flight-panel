import FlightDetailsActionTypes from "./flight-details.types";

export const fetchFlightDetailsStart = () => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_START
});

export const fetchFlightDetailsSuccess = flightDetailsList => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_SUCCESS,
  payload: flightDetailsList
});

export const fetchFlightDetailsFailure = errorMessage => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_FAILURE,
  payload: errorMessage
});
