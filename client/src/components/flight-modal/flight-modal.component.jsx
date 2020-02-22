import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fade from "@material-ui/core/Fade";

import { connect } from "react-redux";
import { hideModal } from "../../redux/modal/modal.actions";

import { createStructuredSelector } from "reselect";
import {
  selectModalShow,
  selectModalItem
} from "../../redux/modal/modal.selectors";

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
      class={classes.modal}
    >
      <Fade in={show}>
        <Card className={classes.card}>
          <CardContent>
            <h2 id="modal-title">Text in a modal</h2>
            <p id="modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({
  show: selectModalShow,
  item: selectModalItem
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightModal);
