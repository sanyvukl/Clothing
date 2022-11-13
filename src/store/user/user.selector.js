import { createSelector } from "@reduxjs/toolkit";

const selectUserReducer = (state) => state.user;
export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
