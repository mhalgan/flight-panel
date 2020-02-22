import ModalActionTypes from "./modal.types";

const INITIAL_STATE = {
  show: false,
  item: {}
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {
        show: true,
        item: action.payload
      };
    case ModalActionTypes.HIDE_MODAL:
      return {
        show: false,
        item: {}
      };

    default:
      return state;
  }
};

export default modalReducer;
