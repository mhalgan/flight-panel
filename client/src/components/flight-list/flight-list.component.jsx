import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import FlightCard from "../flight-card/flight-card.component";

import { createStructuredSelector } from "reselect";
import {
  selectFlightsList,
  selectIsFetching
} from "../../redux/flight-details/flight-details.selectors";
import WithLoading from "../loading/with-loading.component";

const FlightList = ({ flightsList, isFetching }) => (
  <div>
    {flightsList.map(flight => (
      <FlightCard key={flight._id} flight={flight} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  flightsList: selectFlightsList,
  isFetching: selectIsFetching
});

export default compose(WithLoading, connect(mapStateToProps))(FlightList);
