/* eslint-disable spaced-comment */
import { takeLatest, put, call, all } from "redux-saga/effects"

import {
  AUTH,
  googleProvider,
  createUserAuthInFireStore,
  getUserAuthSession,
} from "../../../../firebase/firebase.utils"

import {
  checkUserSessionFailedAC,
  createUserEmailAndPasswordFailedAC,
  signInWithEmailPasswordFailedAC,
  signInWithGoogleFailedAC,
  signInWithGoogleSuccessAC,
  signOutFailedAC,
  signOutSuccessAC,
  toggleLoaderAC,
} from "../actions/userAuth.actions"

import {
  CHECK_USER_SESSION_START,
  CREATE_USER_EMAIL_AND_PASSWORD_START,
  SIGN_IN_WITH_EMAIL_PASSWORD_START,
  SIGN_IN_WITH_GOOGLE_START,
  SIGN_OUT_START,
} from "../types/userAuth.types"

////////////////--UTILS--////////////////
function* utilsForCreateUserForFireBase(userAuth, otherData) {
  try {
    const userRef = yield call(createUserAuthInFireStore, userAuth, otherData)
    const snapShot = yield userRef.get()

    yield put(signInWithGoogleSuccessAC({ id: userRef.id, ...snapShot.data() }))
  } catch (error) {
    yield put(signInWithGoogleFailedAC(error))
  }
}
////////////////--UTILS--////////////////

////////////////--SIGN_GOOGLE--////////////////
function* signInWithGoogle() {
  try {
    const { user } = yield AUTH.signInWithPopup(googleProvider)

    yield utilsForCreateUserForFireBase(user)
  } catch (error) {
    yield put(signInWithGoogleFailedAC(error))
  }
}

function* onSignInWithGoogleStart() {
  yield takeLatest(SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)
}
////////////////--SIGN_GOOGLE--////////////////

////////////////--SIGN_EMAIL_PASSWORD--////////////////
function* signInWithEmailPassword({ payload: { email, password } }) {
  try {
    yield put(toggleLoaderAC())

    const { user } = yield AUTH.signInWithEmailAndPassword(email, password)

    yield utilsForCreateUserForFireBase(user)
    yield put(toggleLoaderAC())
  } catch (error) {
    yield put(signInWithEmailPasswordFailedAC(error))
    yield put(toggleLoaderAC())
  }
}

function* onSignInWithEmailPasswordStart() {
  yield takeLatest(SIGN_IN_WITH_EMAIL_PASSWORD_START, signInWithEmailPassword)
}
////////////////--SIGN_EMAIL_PASSWORD--////////////////

////////////////--SIGN_OUT--////////////////
function* signOut() {
  try {
    yield AUTH.signOut()

    yield put(signOutSuccessAC())
  } catch (error) {
    yield put(signOutFailedAC(error))
  }
}
function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut)
}
////////////////--SIGN_OUT--////////////////

////////////////--CREATE_USER_EMAIL_PASSWORD--////////////////
function* createUserEmailPassword({
  payload: { email, password, displayName },
}) {
  try {
    yield put(toggleLoaderAC())

    const { user } = yield AUTH.createUserWithEmailAndPassword(email, password)

    yield utilsForCreateUserForFireBase(user, { displayName })
    yield put(toggleLoaderAC())
  } catch (error) {
    yield put(createUserEmailAndPasswordFailedAC(error))
    yield put(toggleLoaderAC())
  }
}
function* onCreateUserEmailPasswordStart() {
  yield takeLatest(
    CREATE_USER_EMAIL_AND_PASSWORD_START,
    createUserEmailPassword
  )
}
////////////////--CREATE_USER_EMAIL_PASSWORD--////////////////

////////////////--CHECK_SESSION--////////////////
function* checkUserSession() {
  try {
    const userAuth = yield getUserAuthSession()

    if (!userAuth) return

    yield utilsForCreateUserForFireBase(userAuth)
  } catch (error) {
    yield put(checkUserSessionFailedAC(error))
  }
}
function* onCheckUserSessionStart() {
  yield takeLatest(CHECK_USER_SESSION_START, checkUserSession)
}
////////////////--CHECK_SESSION--////////////////

export default function* userSagas() {
  yield all([
    call(onSignInWithGoogleStart),
    call(onSignInWithEmailPasswordStart),
    call(onSignOutStart),
    call(onCreateUserEmailPasswordStart),
    call(onCheckUserSessionStart),
  ])
}
