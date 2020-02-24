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
    scheduledDeparture,
    status
  } = flight;

  const classes = useStyles();

  return (
    <form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            label="Flight Code"
            name="flightCode"
            value={flightCode}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            label="Flight Provider"
            name="flightProvider"
            value={flightProvider}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            label="Source Port Name"
            name="sourcePortName"
            value={sourcePortName}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            label="Source Port Code"
            name="sourcePortCode"
            value={sourcePortCode}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            label="Destination Port Name"
            name="destinationPortName"
            value={destinationPortName}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            label="Destination Port Code"
            name="destinationPortCode"
            value={destinationPortCode}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            label="Scheduled Arrival"
            name="scheduledArrival"
            value={scheduledArrival}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            label="Scheduled Departure"
            name="scheduledDeparture"
            value={scheduledDeparture}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.input}>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="Status"
              name="status"
              value={status}
              onChange={handleChange}
            >
              {statusList.map((status, index) => {
                return (
                  <MenuItem key={index} value={status}>
                    {status}
                  </MenuItem>
                );
              })}
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
