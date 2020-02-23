import React, { useEffect } from "react";
import { connect } from "react-redux";

import FlightModal from "../../components/flight-modal/flight-modal.component";
import FlightList from "../../components/flight-list/flight-list.component";
import { fetchFlightDetailsStart } from "../../redux/flight-details/flight-details.actions";
import { fetchFlightStatusStart } from "../../redux/flight-details/flight-details.actions";

const FlightPanel = ({ fetchFlightStatusStart, fetchFlightDetailsStart }) => {
  useEffect(() => {
    fetchFlightDetailsStart();
    fetchFlightStatusStart();
  });

  return (
    <div>
      <h1>Flight Panel</h1>
      <FlightModal />
      <FlightList />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchFlightDetailsStart: () => dispatch(fetchFlightDetailsStart()),
  fetchFlightStatusStart: () => dispatch(fetchFlightStatusStart())
});

export default connect(null, mapDispatchToProps)(FlightPanel);
