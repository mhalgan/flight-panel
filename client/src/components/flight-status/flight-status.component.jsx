import React from "react";
import Chip from "@material-ui/core/Chip";
import useStyles from "./flight-status.styles";

const FlightStatus = ({ status }) => {
  const classes = useStyles();
  return (
    <Chip
      className={`${classes.chip} ${
        status === "DELAYED" ? classes.delayed : null
      }`}
      color="primary"
      label={status}
    />
  );
};

export default FlightStatus;
