import { combineReducers } from "redux";
import flightDetailsReducer from "./flight-details/flight-details.reducer";
import modalReducer from "./modal/modal.reducer";

const rootReducer = combineReducers({
  flightDetails: flightDetailsReducer,
  modal: modalReducer
});

export default rootReducer;
