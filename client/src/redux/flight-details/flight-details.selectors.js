import { createSelector } from "reselect";
import moment from "moment";

const selectFlightDetails = state => state.flightDetails;

export const selectFlightsList = createSelector(
  [selectFlightDetails],
  flightDetails =>
    flightDetails.flights.map(flight => {
      let newFlightObject = {};
      let scheduledArrivalHours = "";
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

      newFlightObject = {
        ...flight,
        scheduledArrival: scheduledArrivalHours
      };

      if (newScheduledArrivalHours) {
        newFlightObject["newScheduledArrival"] = newScheduledArrivalHours;
      }
      return newFlightObject;
    })
);
