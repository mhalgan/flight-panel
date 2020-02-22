import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Divider from "@material-ui/core/Divider";

import FlightStatus from "../flight-status/flight-status.component";
import useStyles from "./flight-card.styles";

const FlightCard = ({ flight }) => {
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
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item sm={2} xs={6}>
            <span
              className={
                newScheduledArrival
                  ? classes.delayedArrival
                  : classes.scheduledTime
              }
            >
              {scheduledArrival}
            </span>
            &nbsp;
            <span className={classes.scheduledTime}>{newScheduledArrival}</span>
          </Grid>

          <Grid item sm={2} xs={6}>
            <span></span>
            <Divider orientation="vertical" className={classes.divider} />
            <div>
              <div className={classes.bold}>
                <span>{sourcePortName}</span> &nbsp;
                <span>{sourcePortCode}</span>
              </div>
              <div>
                <span>{flightCode}</span> &nbsp;
                <span>{flightProvider}</span>
              </div>
            </div>
          </Grid>

          <Grid item sm={3} xs={4}>
            <FlightStatus status={status} />
          </Grid>
          <Grid item sm={2} xs={4}>
            <span></span>
            <Divider orientation="vertical" className={classes.divider} />
            <div>
              <span>{destinationPortName}</span> &nbsp;
              <span>{destinationPortCode}</span>
            </div>
          </Grid>
          <Grid item sm={3} xs={4} className={classes.moreDetails}>
            <Button endIcon={<ArrowForwardIcon />}>More Details</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
