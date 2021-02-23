import TOGGLE_MOBILE_MENU from "./types/mobile.types"

const INITIAL_STATE = {
  toggleMenu: false,
}

const mobileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        toggleMenu: !state.toggleMenu,
      }
    default:
      return state
  }
}

export default mobileReducer
