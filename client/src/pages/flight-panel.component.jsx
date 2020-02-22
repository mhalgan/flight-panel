import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFlightDetailsStart } from "../redux/flight-details/flight-details.actions.js";

const FlightPanel = ({ fetchFlightDetailsStart }) => {
  useEffect(() => {
    fetchFlightDetailsStart();
  });

  return (
    <div>
      <h1>Flight Panel</h1>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchFlightDetailsStart: () => dispatch(fetchFlightDetailsStart())
});

export default connect(null, mapDispatchToProps)(FlightPanel);
