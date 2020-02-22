import FlightDetailsActionTypes from "./flight-details.types";

const INITIAL_STATE = {
  loading: false,
  flightDetails: []
};

const flightDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FlightDetailsActionTypes.FETCH_FLIGHT_DETAILS_START:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default flightDetailsReducer;
