import { createSelector } from "reselect";

const selectFlightDetails = state => state.flightDetails;

export const selectFlightsList = createSelector(
  [selectFlightDetails],
  flightDetails => flightDetails.flights
);
