const flightDetailsModel = require("../models/flight-details.model");

const createFlightDetails = async (req, res, next) => {
  try {
    let flightDetails = await flightDetailsModel.create(req.body);
    return res.status(201).json(flightDetails);
  } catch (error) {
    next(error);
  }
};

const getFlightDetails = async (req, res, next) => {
  try {
    let flightDetailsList = await flightDetailsModel.find({});
    return res.status(200).json(flightDetailsList);
  } catch (error) {
    next(error);
  }
};

const getFlightDetailsById = async (req, res, next) => {
  try {
    let id = req.params.id;
    let flightDetails = await flightDetailsModel.findById(id);

    if (flightDetails) {
      return res.status(200).json(flightDetails);
    }

    // flight-details not found
    return res.status(404).json();
  } catch (error) {
    next(error);
  }
};

const updateFlightDetails = async (req, res, next) => {
  try {
    let id = req.params.id;

    let flightDetails = await flightDetailsModel.findByIdAndUpdate(
      id,
      req.body,
      {
        useFindAndModify: false,
        new: true,
        runValidators: true
      }
    );

    return res.status(200).json(flightDetails);
  } catch (error) {
    next(error);
  }
};

const deleteFlightDetails = async (req, res, next) => {
  try {
    let id = req.params.id;
    let flightDetails = await flightDetailsModel.findByIdAndRemove(id, {
      useFindAndModify: false
    });
    if (flightDetails) {
      return res.status(204).json();
    }

    // flight-details not found
    return res.status(404).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFlightDetails,
  getFlightDetailsById,
  getFlightDetails,
  updateFlightDetails,
  deleteFlightDetails
};
