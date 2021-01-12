import { ADD_ITEM_TO_CART, TOGGLE_CAR_HIDDEN } from "../types/cart.types"

export const toggleCartHiddenAC = () => {
  return {
    type: TOGGLE_CAR_HIDDEN
  }
};

export const addItemToCartAC = (item) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  }
};