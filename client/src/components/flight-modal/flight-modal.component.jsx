import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

import FlightForm from "../flight-form/flight-form.component";
import ConfirmationDialog from "../confirmation-dialog/confirmation-dialog";
import { connect } from "react-redux";
import { hideModal } from "../../redux/modal/modal.actions";
import {
  updateFlightDetailsStart,
  deleteFlightDetailsStart
} from "../../redux/flight-details/flight-details.actions";

import { createStructuredSelector } from "reselect";
import {
  selectModalShow,
  selectModalFlight
} from "../../redux/modal/modal.selectors";

import useStyles from "./flight-modal.styles";

const FlightModal = ({
  hideModal,
  updateFlight,
  deleteFlight,
  show,
  flight
}) => {
  const classes = useStyles();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClose = () => {
    hideModal();
  };

  const handleDelete = () => {
    deleteFlight(flight);
    setShowConfirmation(false);
    hideModal();
  };

  const handleSave = () => {
    updateFlight(flight);
    hideModal();
  };

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={show}
        onClose={handleClose}
        className={classes.modal}
      >
        <Fade in={show}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Flight details
              </Typography>
              <FlightForm />
            </CardContent>
            <CardActions className={classes.actions}>
              <Button className={classes.button} onClick={handleClose}>
                Cancel
              </Button>
              <Button
                color="secondary"
                onClick={() => setShowConfirmation(true)}
              >
                Delete
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                onClick={handleSave}
                autoFocus
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Fade>
      </Modal>
      <ConfirmationDialog
        open={showConfirmation}
        handleClose={() => setShowConfirmation(false)}
        title="Delete"
        text="Are you sure you want to delete this Flight Details permanently?"
        onNo={() => setShowConfirmation(false)}
        onYes={() => handleDelete()}
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  show: selectModalShow,
  flight: selectModalFlight
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  updateFlight: flight => dispatch(updateFlightDetailsStart(flight)),
  deleteFlight: flight => dispatch(deleteFlightDetailsStart(flight))
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightModal);
