import ModalActionTypes from "./modal.types";

export const showModal = flight => ({
  type: ModalActionTypes.SHOW_MODAL,
  payload: flight
});

export const hideModal = () => ({
  type: ModalActionTypes.HIDE_MODAL
});

export const setFlight = flight => ({
  type: ModalActionTypes.SET_FLIGHT,
  payload: flight
});
