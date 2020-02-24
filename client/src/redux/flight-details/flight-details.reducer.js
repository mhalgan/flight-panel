import FlightDetailsActionTypes from "./flight-details.types";

const INITIAL_STATE = {
  isFetching: false,
  flights: [],
  errorMessage: null,
  status: []
};

const flightDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_START:
    case FlightDetailsActionTypes.FETCH_FLIGHT_STATUS_START:
    case FlightDetailsActionTypes.UPDATE_FLIGHT_STATUS_START:
    case FlightDetailsActionTypes.DELETE_FLIGHT_STATUS_START:
      return {
        ...state,
        isFetching: true
      };
    case FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        flights: action.payload,
        errorMessage: null
      };
    case FlightDetailsActionTypes.FETCH_FLIGHT_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        status: action.payload,
        errorMessage: null
      };

    case FlightDetailsActionTypes.UPDATE_FLIGHT_STATUS_SUCCESS:
    case FlightDetailsActionTypes.DELETE_FLIGHT_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null
      };

    case FlightDetailsActionTypes.ASYNC_OPERATION_FLIGHT_STATUS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default flightDetailsReducer;
