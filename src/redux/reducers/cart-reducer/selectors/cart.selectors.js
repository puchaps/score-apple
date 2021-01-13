import { createSelector } from "reselect";

const selectorCart = (state) => state.cart;

export const selectorCartHidden = createSelector(
  [selectorCart],
  (cart) => cart.hidden
);

export const selectorCartCartItems = createSelector(
  [selectorCart],
  (cart) => cart.cartItems
);

export const selectorAddedsItemsFromCart = createSelector(
  [selectorCartCartItems],
  (cartItems) => {
    return cartItems.reduce((initialValue, item) => initialValue + item.quantity, 0)
  }
);

export const selectorTotalPriceAllItemsFromCart = createSelector(
  [selectorCartCartItems],
  (cartItems) => {
    return cartItems.reduce((initialValue, item) => initialValue + item.quantity * item.price, 0)
  }
);