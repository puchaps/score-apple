import { takeLatest, put, call, all } from 'redux-saga/effects';

import { 
  AUTH, googleProvider,
  createUserAuthInFireStore, getUserAuthSesion 
} from '../../../../firebase/firebase.utils';

import { 
  checkUserSesionFailedAC,
  createUserEmailAndPasswordFailedAC,
  signInWithEmailPasswordFailedAC,
  signInWithGoogleFailedAC, 
  signInWithGoogleSuccsesAC,
  signOutFailedAC,
  signOutSuccsesAC
} from '../actions/userAuth.actions';

import { 
  CHECK_USER_SESION_START,
  CREATE_USER_EMAIL_AND_PASSWORD_START,
  SIGN_IN_WITH_EMAIL_PASSWODR_START,
  SIGN_IN_WITH_GOOGLE_START,
  SIGN_OUT_START,
} from '../types/userAuth.types';

////////////////--UTILS--////////////////
function* utilsForCreateUserForFireBase(userAuth, otherData) {
  try{
    const userRef = yield call(createUserAuthInFireStore, userAuth, otherData);
    const snapShot = yield userRef.get();

    yield put(signInWithGoogleSuccsesAC({ id: userRef.id, ...snapShot.data() }));
  } catch(error) {
    yield put(signInWithGoogleFailedAC(error));
  }
}
////////////////--UTILS--////////////////


////////////////--SIGN_GOOGLE--////////////////
function* signInWithGoogle() {
  try{
    const{user} = yield AUTH.signInWithPopup(googleProvider);
    
    yield utilsForCreateUserForFireBase(user);
  } catch(error) {
    yield put(signInWithGoogleFailedAC(error))
  }
};

function* onsignInWithGoogleStart() {
  yield takeLatest(SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)
};
////////////////--SIGN_GOOGLE--////////////////


////////////////--SIGN_EMAIL_PASSWODR--////////////////
function* signInWithEmailPassword({ payload: { email, password } }) {
  try{
    const{user} = yield AUTH.signInWithEmailAndPassword(email, password);

    yield utilsForCreateUserForFireBase(user);
  } catch(error) {
    yield put(signInWithEmailPasswordFailedAC(error))
  }
}
function* onSignInWithEmailPasswodStart() {
  yield takeLatest(SIGN_IN_WITH_EMAIL_PASSWODR_START, signInWithEmailPassword);
}
////////////////--SIGN_EMAIL_PASSWODR--////////////////


////////////////--SIGN_OUT--////////////////
function* signOut() {
  try {
    yield AUTH.signOut();

    yield put(signOutSuccsesAC());
  } catch(error) {
    yield put(signOutFailedAC(error));
  }
};
function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}
////////////////--SIGN_OUT--////////////////


////////////////--CREATE_USER_EMAIL_PASSWORD--////////////////
function* createUserEmailPassword({payload: { email, password, displayName}}) {
  try {
    const{user} = yield AUTH.createUserWithEmailAndPassword(email, password);

    yield utilsForCreateUserForFireBase(user, {displayName});
  } catch(error) {
    yield put(createUserEmailAndPasswordFailedAC(error));
  }
}
function* onCreateUserEmailPasswordStart() {
  yield takeLatest(CREATE_USER_EMAIL_AND_PASSWORD_START, createUserEmailPassword);
}
////////////////--CREATE_USER_EMAIL_PASSWORD--////////////////


////////////////--CHECK_SESION--////////////////
function* checkUserSesion() {
  try{
    const userAuth= yield getUserAuthSesion();

    if (!userAuth) return;

    yield utilsForCreateUserForFireBase(userAuth);
  } catch(error) {
    yield put(checkUserSesionFailedAC(error));
  }
}

function* onCheckUserSesionStart() {
  yield takeLatest(CHECK_USER_SESION_START, checkUserSesion)
}
////////////////--CHECK_SESION--////////////////

export default function* userSagas() {
  yield all([
    call(onsignInWithGoogleStart),
    call(onSignInWithEmailPasswodStart),
    call(onSignOutStart),
    call(onCreateUserEmailPasswordStart),
    call(onCheckUserSesionStart)
  ]);
};