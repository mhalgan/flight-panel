import { createSelector } from "reselect";
import moment from "moment";

const selectFlightDetails = state => state.flightDetails;

export const selectFlightStatusList = createSelector(
  [selectFlightDetails],
  flightDetails => flightDetails.status
);

export const selectIsFetching = createSelector(
  [selectFlightDetails],
  flightDetails => flightDetails.isFetching
);

export const selectFlightsList = createSelector(
  [selectFlightDetails],
  flightDetails =>
    flightDetails.flights.map(flight => {
      let newFlightObject = {};
      let scheduledArrivalHours = "";
      let scheduledDepartureHours = "";
      let newScheduledArrivalHours = "";

      if (flight.scheduledArrival) {
        const scheduledArrivalDate = new Date(flight.scheduledArrival);
        scheduledArrivalHours = moment(scheduledArrivalDate).format("HH:mm");
        if (flight.status === "DELAYED") {
          const newScheduledArrivalDate = new Date(
            scheduledArrivalDate.getTime() + 15 * 60000
          );
          newScheduledArrivalHours = moment(newScheduledArrivalDate).format(
            "HH:mm"
          );
        }
      }

      if (flight.scheduledDeparture) {
        const scheduledDepartureDate = new Date(flight.scheduledDeparture);
        scheduledDepartureHours = moment(scheduledDepartureDate).format(
          "HH:mm"
        );
      }

      newFlightObject = {
        ...flight,
        scheduledArrivalHours,
        scheduledDepartureHours
      };

      if (newScheduledArrivalHours) {
        newFlightObject["newScheduledArrivalHours"] = newScheduledArrivalHours;
      }
      return newFlightObject;
    })
);
