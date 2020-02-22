import ModalActionTypes from "./modal.types";

export const showModal = item => ({
  type: ModalActionTypes.SHOW_MODAL,
  payload: item
});

export const hideModal = item => ({
  type: ModalActionTypes.HIDE_MODAL
});
