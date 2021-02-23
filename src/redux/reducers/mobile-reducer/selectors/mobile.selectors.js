import { createSelector } from "reselect"

const selectorMobile = (state) => state.mobile

const selectorToggleMenu = createSelector(
  [selectorMobile],
  (mobile) => mobile.toggleMenu
)

export default selectorToggleMenu
