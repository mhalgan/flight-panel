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

export const updateFlightStatusStart = () => ({
  type: FlightDetailsActionTypes.UPDATE_FLIGHT_STATUS_START
});
export const updateFlightStatusSuccess = () => ({
  type: FlightDetailsActionTypes.UPDATE_FLIGHT_STATUS_SUCCESS
});

export const deleteFlightStatusStart = () => ({
  type: FlightDetailsActionTypes.DELETE_FLIGHT_STATUS_START
});
export const deleteFlightStatusSuccess = () => ({
  type: FlightDetailsActionTypes.DELETE_FLIGHT_STATUS_SUCCESS
});

export const asyncOperationFlightStatusFailure = errorMessage => ({
  type: FlightDetailsActionTypes.ASYNC_OPERATION_FLIGHT_STATUS_FAILURE,
  payload: errorMessage
});
