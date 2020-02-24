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
        status: action.payload,
        errorMessage: null
      };

    case FlightDetailsActionTypes.UPDATE_FLIGHT_DETAILS_SUCCESS:
    case FlightDetailsActionTypes.DELETE_FLIGHT_DETAILS_SUCCESS:
      return {
        ...state,
        errorMessage: null
      };

    case FlightDetailsActionTypes.ASYNC_OPERATION_FLIGHT_DETAILS_FAILURE:
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
