const express = require("express");
const router = express.Router();

const flightDetailsRoute = require("./flight-details.route");

router.use("/flight-details", flightDetailsRoute);

module.exports = router;
