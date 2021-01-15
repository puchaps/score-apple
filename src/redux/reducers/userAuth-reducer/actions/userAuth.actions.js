import { 
  CHECK_USER_SESION_FAILED,
  CHECK_USER_SESION_START,
  CREATE_USER_EMAIL_AND_PASSWORD_FAILED,
  CREATE_USER_EMAIL_AND_PASSWORD_START,
  CREATE_USER_EMAIL_AND_PASSWORD_SUCCSES,
  SIGN_IN_WITH_EMAIL_PASSWODR_FAILED,
  SIGN_IN_WITH_EMAIL_PASSWODR_START,
  SIGN_IN_WITH_EMAIL_PASSWODR_SUCCSES,
  SIGN_IN_WITH_GOOGLE_FAILED,
  SIGN_IN_WITH_GOOGLE_START,
  SIGN_IN_WITH_GOOGLE_SUCCSES,
  SIGN_OUT_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCSES
} from "../types/userAuth.types";

////////////////--SIGN_GOOGLE--////////////////
export const signInWithGoogleStartAC = () => ({
  type: SIGN_IN_WITH_GOOGLE_START
});
export const signInWithGoogleSuccsesAC = (user) => ({
  type: SIGN_IN_WITH_GOOGLE_SUCCSES,
  payload: user
});
export const signInWithGoogleFailedAC = (error) => ({
  type: SIGN_IN_WITH_GOOGLE_FAILED,
  payload: error
});
////////////////--SIGN_GOOGLE--////////////////


////////////////--CHECK_SESION--////////////////
export const checkUserSesionStartAC = () => ({
  type: CHECK_USER_SESION_START
});
export const checkUserSesionFailedAC = (error) => ({
  type: CHECK_USER_SESION_FAILED,
  payload: error
});
////////////////--CHECK_SESION--////////////////


////////////////--SIGN_EMAIL_PASSWORD--////////////////
export const signInWithEmailPasswordStartAC = (userData) => ({
  type: SIGN_IN_WITH_EMAIL_PASSWODR_START,
  payload: userData
});
export const signInWithEmailPasswordSuccsesAC = (userData) => ({
  type: SIGN_IN_WITH_EMAIL_PASSWODR_SUCCSES,
  payload: userData
});
export const signInWithEmailPasswordFailedAC = (error) => ({
  type: SIGN_IN_WITH_EMAIL_PASSWODR_FAILED,
  payload: error
});
////////////////--SIGN_EMAIL_PASSWORD--////////////////


////////////////--SIGN_OUT--////////////////
export const signOutStartAC = () => ({
  type: SIGN_OUT_START
});
export const signOutSuccsesAC = () => ({
  type: SIGN_OUT_SUCCSES
});
export const signOutFailedAC = (error) => ({
  type: SIGN_OUT_FAILED,
  payload: error
});
////////////////--SIGN_OUT--////////////////


////////////////--CREATE_USER--////////////////
export const createUserEmailAndPasswordStartAC = (userData) => ({
  type: CREATE_USER_EMAIL_AND_PASSWORD_START,
  payload: userData
}); 
export const createUserEmailAndPasswordSuccsesAC = (userData) => ({
  type: CREATE_USER_EMAIL_AND_PASSWORD_SUCCSES,
  payload: userData
}); 
export const createUserEmailAndPasswordFailedAC = (error) => ({
  type: CREATE_USER_EMAIL_AND_PASSWORD_FAILED,
  payload: error
}); 
////////////////--CREATE_USER--////////////////




