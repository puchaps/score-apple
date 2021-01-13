import { createSelector } from "reselect";

const selectorUser = (state) => state.userAuth;

export const selectorUserAuthCurrentUser = createSelector(
  [selectorUser],
  (user) => user.currentUser
);