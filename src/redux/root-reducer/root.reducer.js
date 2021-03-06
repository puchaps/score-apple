import { combineReducers } from "redux"

import userAuthReducer from "../reducers/userAuth-reducer/userAuth.reducer"
import cartReducer from "../reducers/cart-reducer/cart.reducer"
import shopReducer from "../reducers/shop-reducer/shop.reducer"
import mobileReducer from "../reducers/mobile-reducer/mobile.reducer"

export default combineReducers({
  userAuth: userAuthReducer,
  cart: cartReducer,
  shop: shopReducer,
  mobile: mobileReducer,
})
