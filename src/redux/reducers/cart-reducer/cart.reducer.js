import { TOGGLE_CAR_HIDDEN } from "./types/cart.types";

const INITIAL_STATE = {
  hidden: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_CAR_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;