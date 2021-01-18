
import { GET_COLLECTIONS_FROM_FIRESTORE } from './types/shop.types';

const INITIAL_STATE = {
  collections: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_COLLECTIONS_FROM_FIRESTORE:
      return {
        ...state,
        collections: action.payload
      };
    default: 
      return state;
  }
};

export default shopReducer