import {all, call} from 'redux-saga/effects';

import userSagas from '../reducers/userAuth-reducer/sagas/userAuth.sagas';

export default function* rootSagas() {
  yield all([
    call(userSagas)
  ])
}