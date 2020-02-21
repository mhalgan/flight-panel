const express = require("express");
const router = express.Router();

const flightDetailsControllers = require("../controllers/flight-details.controller");

const {
  createFlightDetails,
  getFlightDetailsById,
  getFlightDetails,
  updateFlightDetails,
  deleteFlightDetails
} = flightDetailsControllers;

router.get("/", getFlightDetails);
router.post("/", createFlightDetails);

module.exports = router;
