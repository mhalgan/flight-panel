const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let FlightDetails = new Schema(
  {
    flightCode: {
      type: String
    },
    flightProvider: {
      type: String
    },
    sourcePortName: {
      type: String
    },
    sourcePortCode: {
      type: String
    },
    destinationPortName: {
      type: String
    },
    destinationPortCode: {
      type: String
    },
    scheduledArrival: {
      type: Date
    },
    scheduledDeparture: {
      type: Date
    },
    status: {
      type: String,
      enum: ["LANDED", "ON SCHEDULE", "DELAYED"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("FlightDetails", FlightDetails);
