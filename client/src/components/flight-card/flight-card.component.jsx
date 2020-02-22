import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const FlightCard = ({ flight }) => {
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

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={2}>
            <span>{scheduledArrival}</span>
          </Grid>
          <Grid item xs={2}>
            <div>
              <span>{sourcePortName}</span> &nbsp;
              <span>{sourcePortCode}</span>
            </div>
            <div>
              <span>{flightCode}</span> &nbsp;
              <span>{flightProvider}</span>
            </div>
          </Grid>
          <Grid item xs={2}>
            <span>{status}</span>
          </Grid>
          <Grid item xs={2}>
            <span>{destinationPortName}</span> &nbsp;
            <span>{destinationPortCode}</span>
          </Grid>
          <Grid item xs={4}>
            <span>More Details -></span>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
