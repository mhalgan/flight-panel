import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import Fade from "@material-ui/core/Fade";

import FlightForm from "../flight-form/flight-form.component";
import { connect } from "react-redux";
import { hideModal } from "../../redux/modal/modal.actions";

import { createStructuredSelector } from "reselect";
import { selectModalShow } from "../../redux/modal/modal.selectors";

import useStyles from "./flight-modal.styles";

const FlightModal = ({ hideModal, show }) => {
  const classes = useStyles();

  const handleClose = () => {
    hideModal();
  };
  return (
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
          <CardActions>
            <Button onClick={handleClose} variant="contained">
              Cancel
            </Button>
            <Button variant="contained">Save</Button>
          </CardActions>
        </Card>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({
  show: selectModalShow
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightModal);
