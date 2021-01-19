import {all, call} from 'redux-saga/effects';

import shopSagas from '../reducers/shop-reducer/sagas/shop.sagas';
import userSagas from '../reducers/userAuth-reducer/sagas/userAuth.sagas';

export default function* rootSagas() {
  yield all([
    call(userSagas),
    call(shopSagas)
  ])
}