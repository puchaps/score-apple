import {
  ADD_ITEM_TO_CART,
  REMOVE_CHOSEN_ITEM_FROM_CART,
  TOGGLE_CAR_HIDDEN,
  REDUCE_CHOSEN_VALUE_IN_ITEM,
} from "../types/cart.types"

export const toggleCartHiddenAC = () => ({
  type: TOGGLE_CAR_HIDDEN,
})

export const addItemToCartAC = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
})

export const removeChosenItemFromCartAC = (item) => ({
  type: REMOVE_CHOSEN_ITEM_FROM_CART,
  payload: item,
})

export const reduceChosenValueInItemAC = (item) => ({
  type: REDUCE_CHOSEN_VALUE_IN_ITEM,
  payload: item,
})
