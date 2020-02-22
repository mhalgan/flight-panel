import React from "react";
import { connect } from "react-redux";

import FlightCard from "../flight-card/flight-card.component";

import { createStructuredSelector } from "reselect";
import { selectFlightsList } from "../../redux/flight-details/flight-details.selectors.js";

const FlightList = ({ flightsList }) => (
  <div>
    {flightsList.map(flight => (
      <FlightCard key={flight._id} flight={flight} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  flightsList: selectFlightsList
});

export default connect(mapStateToProps)(FlightList);
