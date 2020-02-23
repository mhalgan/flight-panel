import { combineReducers } from "redux";
import flightDetailsReducer from "./flight-details/flight-details.reducer";
import modalReducer from "./modal/modal.reducer";
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  flightDetails: flightDetailsReducer,
  modal: modalReducer,
  auth: authReducer
});

export default rootReducer;
