/* eslint-disable import/prefer-default-export */
import { createSelector } from "reselect"

const selectorUser = (state) => state.userAuth

export const selectorCurrentUser = createSelector(
  [selectorUser],
  (user) => user.currentUser
)

export const selectorLoader = createSelector(
  [selectorUser],
  (user) => user.loader
)
