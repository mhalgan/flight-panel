import FlightDetailsActionTypes from "./flight-details.types";

export const fetchFlightDetailsStart = () => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_START
});
export const fetchFlightDetailsSuccess = flightDetailsList => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_SUCCESS,
  payload: flightDetailsList
});

export const fetchFlightStatusStart = () => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_STATUS_START
});
export const fetchFlightStatusSuccess = flightStatusList => ({
  type: FlightDetailsActionTypes.FETCH_FLIGHT_STATUS_SUCCESS,
  payload: flightStatusList
});

export const updateFlightDetailsStart = flight => ({
  type: FlightDetailsActionTypes.UPDATE_FLIGHT_DETAILS_START,
  payload: flight
});
export const updateFlightDetailsSuccess = () => ({
  type: FlightDetailsActionTypes.UPDATE_FLIGHT_DETAILS_SUCCESS
});

export const deleteFlightDetailsStart = flight => ({
  type: FlightDetailsActionTypes.DELETE_FLIGHT_DETAILS_START,
  payload: flight
});
export const deleteFlightDetailsSuccess = () => ({
  type: FlightDetailsActionTypes.DELETE_FLIGHT_DETAILS_SUCCESS
});

export const asyncOperationFlightDetailsFailure = errorMessage => ({
  type: FlightDetailsActionTypes.ASYNC_OPERATION_FLIGHT_DETAILS_FAILURE,
  payload: errorMessage
});
