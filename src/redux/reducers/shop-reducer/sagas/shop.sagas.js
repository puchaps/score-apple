import { takeLatest, all, call, put } from "redux-saga/effects"

import {
  getCollections,
  getCollectionsSnapShot,
} from "../../../../firebase/firebase.utils"
import {
  getCollectionFailedAC,
  getCollectionSuccessAC,
  toggleLoaderAC,
} from "../actions/shop.actions"
import { GET_COLLECTIONS_START } from "../types/shop.types"

function* getCollectionsFromFireStore() {
  try {
    yield put(toggleLoaderAC())

    const snapShot = yield call(getCollectionsSnapShot)

    const transformCollections = yield call(getCollections, snapShot)

    yield put(getCollectionSuccessAC(transformCollections))
    yield put(toggleLoaderAC())
  } catch (error) {
    yield put(getCollectionFailedAC(error))
  }
}
function* onGetCollectionsFromFireStore() {
  yield takeLatest(GET_COLLECTIONS_START, getCollectionsFromFireStore)
}

export default function* shopSagas() {
  yield all([call(onGetCollectionsFromFireStore)])
}
