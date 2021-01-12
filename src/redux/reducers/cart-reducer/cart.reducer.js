import { ADD_ITEM_TO_CART, TOGGLE_CAR_HIDDEN } from "./types/cart.types";

import { verifyAddItemToCart } from './utils/cart.utils';

const INITIAL_STATE = {
  hidden: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_CAR_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: verifyAddItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;