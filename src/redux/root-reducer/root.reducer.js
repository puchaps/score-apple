import { combineReducers } from "redux";

import userAuthReducer from "../reducers/userAuth-reducer/userAuth.reducer";

export default combineReducers({
  userAuth: userAuthReducer
});