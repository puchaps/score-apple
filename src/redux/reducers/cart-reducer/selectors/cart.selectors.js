import { createSelector } from "reselect";

const selectorCart = (state) => state.cart;

export const selectorCartCartItems = createSelector(
  [selectorCart],
  (cart) => cart.cartitems
);

export const selectorCartHidden = createSelector(
  [selectorCart],
  (cart) => cart.hidden
);