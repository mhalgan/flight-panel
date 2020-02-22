import FlightDetailsActionTypes from "./flight-details.types";

const INITIAL_STATE = {
  isFetching: false,
  flights: []
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
        isFetching: true,
        flights: action.payload,
        errorMessage: null
      };
    case FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_FAILURE:
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
