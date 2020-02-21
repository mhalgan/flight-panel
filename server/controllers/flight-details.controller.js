const flightDetailsModel = require("../models/flight-details.model");

const createFlightDetails = async (req, res) => {
  let flightDetails = await flightDetailsModel.create(req.body);
  return res.status(201).json(flightDetails);
};

const getFlightDetailsById = async (req, res) => {};

const getFlightDetails = async (req, res) => {
  let flightDetailsList = await flightDetailsModel.find({});
  return res.status(200).json(flightDetailsList);
};

const updateFlightDetails = async (req, res) => {};

const deleteFlightDetails = async (req, res) => {};

module.exports = {
  createFlightDetails,
  getFlightDetailsById,
  getFlightDetails,
  updateFlightDetails,
  deleteFlightDetails
};
