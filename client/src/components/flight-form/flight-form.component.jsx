import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectModalFlight } from "../../redux/modal/modal.selectors";
import { setFlight } from "../../redux/modal/modal.actions";

const FlightForm = ({ flight, setFlight }) => {
  const handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    setFlight({ ...flight, [name]: value });
  };

  const {
    flightCode,
    flightProvider,
    sourcePortName,
    sourcePortCode,
    destinationPortName,
    destinationPortCode,
    scheduledArrival,
    newScheduledArrival,
    status
  } = flight;

  return (
    <form>
      <TextField
        label="Flight Code"
        variant="outlined"
        name="flightCode"
        value={flightCode}
        onChange={handleChange}
      />

      <TextField
        label="Flight Provider"
        variant="outlined"
        name="flightProvider"
        value={flightProvider}
        onChange={handleChange}
      />
      <TextField
        label="Source Port Name"
        variant="outlined"
        name="sourcePortName"
        value={sourcePortName}
        onChange={handleChange}
      />
      <TextField
        label="Source Port Code"
        variant="outlined"
        name="sourcePortCode"
        value={sourcePortCode}
        onChange={handleChange}
      />
      <TextField
        label="Destination Port Name"
        variant="outlined"
        name="destinationPortName"
        value={destinationPortName}
        onChange={handleChange}
      />
      <TextField
        label="Flight Provider"
        variant="outlined"
        name="flightProvider"
        value={flightProvider}
        onChange={handleChange}
      />
      <TextField
        label="Flight Provider"
        variant="outlined"
        name="flightProvider"
        value={flightProvider}
        onChange={handleChange}
      />
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  flight: selectModalFlight
});

const mapDispatchToProps = dispatch => ({
  setFlight: flight => dispatch(setFlight(flight))
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightForm);
