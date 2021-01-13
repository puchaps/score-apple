import { 
  ADD_ITEM_TO_CART, REDUCE_CHOOSED_VALUE_IN_ITEM, REMOVE_CHOOSED_ITEM_FROM_CART, 
  TOGGLE_CAR_HIDDEN
} from "./types/cart.types";

import { reduceChoosedItemFromCart, removeChoosedItemFromCart, verifyAddItemToCart } from './utils/cart.utils';

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
      }
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: verifyAddItemToCart(state.cartItems, action.payload)
      }
    case REMOVE_CHOOSED_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeChoosedItemFromCart(state.cartItems, action.payload)
      }
    case REDUCE_CHOOSED_VALUE_IN_ITEM:
      return {
        ...state,
        cartItems: reduceChoosedItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;