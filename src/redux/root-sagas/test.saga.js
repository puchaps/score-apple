import { take } from 'redux-saga/effects';

export function* testSaga() {
  yield take('TEST_SAGA');
};