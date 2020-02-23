const express = require("express");
const router = express.Router();

const flightDetailsRoute = require("./flight-details.route");
const authRoute = require("./auth.route");
const authGuard = require("../middlewares/auth-guard.middle");

router.use("/flight-details", authGuard.checkAuthToken, flightDetailsRoute);
router.use("/auth", authRoute);

module.exports = router;
