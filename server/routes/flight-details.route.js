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
router.get("/:id", getFlightDetailsById);
router.post("/", createFlightDetails);
router.put("/:id", updateFlightDetails);
router.delete("/:id", deleteFlightDetails);

module.exports = router;
