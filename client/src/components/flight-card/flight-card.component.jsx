import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { showModal } from "../../redux/modal/modal.actions";

import FlightStatus from "../flight-status/flight-status.component";
import useStyles from "./flight-card.styles";

const FlightCard = ({ flight, showModal }) => {
  const {
    flightCode,
    flightProvider,
    sourcePortName,
    sourcePortCode,
    destinationPortName,
    destinationPortCode,
    newScheduledArrivalHours,
    scheduledArrivalHours,

    status
  } = flight;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item sm={2} xs={6}>
            <span
              className={
                newScheduledArrivalHours
                  ? classes.delayedArrival
                  : classes.scheduledTime
              }
            >
              {scheduledArrivalHours}
            </span>
            &nbsp;
            <span className={classes.scheduledTime}>
              {newScheduledArrivalHours}
            </span>
          </Grid>
          <Grid item sm={2} xs={6}>
            <span></span>
            <Divider orientation="vertical" className={classes.divider} />
            <div>
              <div className={classes.bold}>
                <span>{sourcePortName}</span> &nbsp;
                <span>{sourcePortCode}</span>
              </div>
              <Typography variant="caption">
                <span>{flightCode}</span> &nbsp;
                <span>{flightProvider}</span>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <FlightStatus status={status} />
          </Grid>
          <Grid item sm={2} xs={6}>
            <span></span>
            <Divider orientation="vertical" className={classes.divider} />
            <Typography variant="caption">
              <span>{destinationPortName}</span> &nbsp;
              <span>{destinationPortCode}</span>
            </Typography>
          </Grid>
          <Grid item sm={3} xs={6} className={classes.moreDetails}>
            <Button
              endIcon={<ArrowForwardIcon />}
              onClick={() => showModal(flight)}
            >
              More Details
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  showModal: flight => dispatch(showModal(flight))
});

export default connect(null, mapDispatchToProps)(FlightCard);
