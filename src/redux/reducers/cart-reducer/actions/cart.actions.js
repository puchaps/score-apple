import { 
  ADD_ITEM_TO_CART, REMOVE_CHOOSED_ITEM_FROM_CART, TOGGLE_CAR_HIDDEN,
  REDUCE_CHOOSED_VALUE_IN_ITEM
} from "../types/cart.types";

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

export const removeChoosedItemFromCartAC = (item) => {
  return {
    type: REMOVE_CHOOSED_ITEM_FROM_CART,
    payload: item
  }
};

export const reduceChooserValueInItemAC = (item) => {
  return {
    type: REDUCE_CHOOSED_VALUE_IN_ITEM,
    payload: item
  }
};
