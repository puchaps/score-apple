import { combineReducers } from "redux";

import userAuthReducer from "../reducers/userAuth-reducer/userAuth.reducer";
import cartReducer from '../reducers/cart-reducer/cart.reducer';

export default combineReducers({
  userAuth: userAuthReducer,
  cart: cartReducer
});