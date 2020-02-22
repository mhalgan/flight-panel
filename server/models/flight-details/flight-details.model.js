const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let FlightDetails = new Schema(
  {
    flightCode: {
      type: String,
      required: [true, "flightCode is required"]
    },
    flightProvider: {
      type: String,
      required: [true, "flightProvider is required"]
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
      type: Date,
      required: [true, "scheduledArrival is required"]
    },
    scheduledDeparture: {
      type: Date,
      required: [true, "scheduledDeparture is required"]
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
