const flightDetailsModel = require("../models/flight-details.model");

const createFlightDetails = async (req, res) => {
  try {
    let flightDetails = await flightDetailsModel.create(req.body);
    return res.status(201).json(flightDetails);
  } catch (error) {
    if (error.name == "ValidationError") {
      return res.status(422).json({ error: error.message });
    } else {
      console.error(error.message);
      return res.status(500).json();
    }
  }
};

const getFlightDetails = async (req, res) => {
  try {
    let flightDetailsList = await flightDetailsModel.find({});
    return res.status(200).json(flightDetailsList);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json();
  }
};

const getFlightDetailsById = async (req, res) => {
  try {
    let id = req.params.id;
    let flightDetails = await flightDetailsModel.findById(id);

    if (flightDetails) {
      return res.status(200).json(flightDetails);
    }

    // flight-details not found
    return res.status(404).json();
  } catch (error) {
    if (error.name == "CastError") {
      return res.status(404).json();
    }
    console.error(error.message);
    return res.status(500).json();
  }
};

const updateFlightDetails = async (req, res) => {
  let id = req.params.id;

  let flightDetails = await flightDetailsModel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
    new: true,
    runValidators: true
  });

  return res.status(200).json(flightDetails);
};

const deleteFlightDetails = async (req, res) => {
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
    if (error.name == "CastError") {
      return res.status(404).json();
    }
    console.error(error.message);
    return res.status(500).json();
  }
};

module.exports = {
  createFlightDetails,
  getFlightDetailsById,
  getFlightDetails,
  updateFlightDetails,
  deleteFlightDetails
};
