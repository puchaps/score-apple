import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCollections, getCollectionsSnapShot } from '../../../../firebase/firebase.utils';
import { getCollectionFailedAC, getCollectionSuccsesAC } from '../actions/shop.actions';
import { GET_COLLECTIONS_START } from '../types/shop.types';

function* getCollectiosFromFirestore() {
  try {
    const snapShot = yield getCollectionsSnapShot();

    const converdCollections = yield call(getCollections, snapShot);
    
    yield put(getCollectionSuccsesAC(converdCollections));
  } catch(error) {
    yield put(getCollectionFailedAC(error));
  }
}
function* onGetCollectionsFromFirestore() {
  yield takeLatest(GET_COLLECTIONS_START, getCollectiosFromFirestore);
}

export default function* shopSagas() {
  yield all([
    call(onGetCollectionsFromFirestore)
  ])
}