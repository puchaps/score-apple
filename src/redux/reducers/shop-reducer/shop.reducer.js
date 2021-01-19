
import { GET_COLLECTIONS_FAILED, GET_COLLECTIONS_SUCCSES } from './types/shop.types';

const INITIAL_STATE = {
  collections: null,
  error: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_COLLECTIONS_SUCCSES:
      return {
        ...state,
        collections: action.payload,
        error: null
      };
    case GET_COLLECTIONS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default: 
      return state;
  }
};

export default shopReducer