import { createSelector } from "reselect";

const selectModal = state => state.modal;

export const selectModalShow = createSelector(
  [selectModal],
  modal => modal.show
);

export const selectModalFlight = createSelector(
  [selectModal],
  modal => modal.flight
);
