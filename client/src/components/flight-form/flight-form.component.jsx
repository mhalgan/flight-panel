import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectModalFlight } from "../../redux/modal/modal.selectors";
import { selectFlightStatusList } from "../../redux/flight-details/flight-details.selectors";
import { setFlight } from "../../redux/modal/modal.actions";

import useStyles from "./flight-form.styles";

const FlightForm = ({ flight, setFlight, statusList }) => {
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
    status
  } = flight;

  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs="6">
          <TextField
            label="Flight Code"
            name="flightCode"
            value={flightCode}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs="6">
          <TextField
            label="Flight Provider"
            name="flightProvider"
            value={flightProvider}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs="6">
          <TextField
            label="Source Port Name"
            name="sourcePortName"
            value={sourcePortName}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs="6">
          <TextField
            label="Source Port Code"
            name="sourcePortCode"
            value={sourcePortCode}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs="6">
          <TextField
            label="Destination Port Name"
            name="destinationPortName"
            value={destinationPortName}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs="6">
          <TextField
            label="Destination Port Code"
            name="destinationPortCode"
            value={destinationPortCode}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs="12">
          <TextField
            label="Scheduled Arrival"
            name="scheduledArrival"
            value={scheduledArrival}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs="12">
          <FormControl>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="Status"
              name="status"
              value={status}
              onChange={handleChange}
            >
              {statusList.map(status => (
                <MenuItem value={status}>status</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  flight: selectModalFlight,
  statusList: selectFlightStatusList
});

const mapDispatchToProps = dispatch => ({
  setFlight: flight => dispatch(setFlight(flight))
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightForm);
