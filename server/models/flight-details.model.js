const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let FlightDetails = new Schema(
  {
    flightCode: {
      type: String,
      required: [true, "flightCode is required"]
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
      required: [true, "status is required"],
      enum: ["LANDED", "ON SCHEDULE", "DELAYED"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("flight-details", FlightDetails);
