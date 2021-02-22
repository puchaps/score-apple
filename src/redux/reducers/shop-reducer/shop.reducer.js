import {
  GET_COLLECTIONS_FAILED,
  GET_COLLECTIONS_SUCCESS,
  TOGGLE_LOADER,
} from "./types/shop.types"

const INITIAL_STATE = {
  collections: null,
  loader: false,
  error: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        error: null,
      }
    case GET_COLLECTIONS_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    case TOGGLE_LOADER:
      return {
        ...state,
        loader: !state.loader,
      }
    default:
      return state
  }
}

export default shopReducer
