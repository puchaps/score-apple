import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import rootReducer from '../root-reducer/root.reducer';

const middleWareAll = [
  logger
]

const STORE = createStore(rootReducer, applyMiddleware(...middleWareAll));

export default STORE;
