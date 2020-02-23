import ModalActionTypes from "./modal.types";

const INITIAL_STATE = {
  show: false,
  edited: false,
  flight: {}
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {
        show: true,
        flight: action.payload,
        edited: false
      };
    case ModalActionTypes.HIDE_MODAL:
      return {
        ...state,
        show: false
      };

    case ModalActionTypes.SET_FLIGHT:
      return {
        ...state,
        edited: true,
        flight: action.payload
      };

    default:
      return state;
  }
};

export default modalReducer;
