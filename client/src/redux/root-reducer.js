import { combineReducers } from "redux";
import flightDetailsReducer from "./flight-details/flight-details.reducer";

const rootReducer = combineReducers({ flightDetails: flightDetailsReducer });

export default rootReducer;
