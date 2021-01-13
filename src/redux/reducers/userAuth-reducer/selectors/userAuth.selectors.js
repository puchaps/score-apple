import { createSelector } from "reselect";

const selectorUser = (state) => state.user;

export const selectorUserCurrentUser = createSelector(
  [selectorUser],
  (user) => user.currentUser
);