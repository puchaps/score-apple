import {
  ADD_ITEM_TO_CART,
  REDUCE_CHOSEN_VALUE_IN_ITEM,
  REMOVE_CHOSEN_ITEM_FROM_CART,
  TOGGLE_CAR_HIDDEN,
} from "./types/cart.types"

import {
  reduceChosenItemFromCart,
  removeChosenItemFromCart,
  verifyAddItemToCart,
} from "./utils/cart.utils"

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CAR_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: verifyAddItemToCart(state.cartItems, action.payload),
      }
    case REMOVE_CHOSEN_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeChosenItemFromCart(state.cartItems, action.payload),
      }
    case REDUCE_CHOSEN_VALUE_IN_ITEM:
      return {
        ...state,
        cartItems: reduceChosenItemFromCart(state.cartItems, action.payload),
      }
    default:
      return state
  }
}

export default cartReducer
