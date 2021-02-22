/* eslint-disable spaced-comment */
import {
  CHECK_USER_SESSION_FAILED,
  CHECK_USER_SESSION_START,
  CREATE_USER_EMAIL_AND_PASSWORD_FAILED,
  CREATE_USER_EMAIL_AND_PASSWORD_START,
  CREATE_USER_EMAIL_AND_PASSWORD_SUCCESS,
  SIGN_IN_WITH_EMAIL_PASSWORD_FAILED,
  SIGN_IN_WITH_EMAIL_PASSWORD_START,
  SIGN_IN_WITH_EMAIL_PASSWORD_SUCCESS,
  SIGN_IN_WITH_GOOGLE_FAILED,
  SIGN_IN_WITH_GOOGLE_START,
  SIGN_IN_WITH_GOOGLE_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  TOGGLE_LOADER,
} from "../types/userAuth.types"

////////////////--SIGN_GOOGLE--////////////////
export const signInWithGoogleStartAC = () => ({
  type: SIGN_IN_WITH_GOOGLE_START,
})
export const signInWithGoogleSuccessAC = (user) => ({
  type: SIGN_IN_WITH_GOOGLE_SUCCESS,
  payload: user,
})
export const signInWithGoogleFailedAC = (error) => ({
  type: SIGN_IN_WITH_GOOGLE_FAILED,
  payload: error,
})
////////////////--SIGN_GOOGLE--////////////////

////////////////--CHECK_SESSION--////////////////
export const checkUserSessionStartAC = () => ({
  type: CHECK_USER_SESSION_START,
})
export const checkUserSessionFailedAC = (error) => ({
  type: CHECK_USER_SESSION_FAILED,
  payload: error,
})
////////////////--CHECK_SESSION--////////////////

////////////////--SIGN_EMAIL_PASSWORD--////////////////
export const signInWithEmailPasswordStartAC = (userData) => ({
  type: SIGN_IN_WITH_EMAIL_PASSWORD_START,
  payload: userData,
})
export const signInWithEmailPasswordSuccessAC = (userData) => ({
  type: SIGN_IN_WITH_EMAIL_PASSWORD_SUCCESS,
  payload: userData,
})
export const signInWithEmailPasswordFailedAC = (error) => ({
  type: SIGN_IN_WITH_EMAIL_PASSWORD_FAILED,
  payload: error,
})
////////////////--SIGN_EMAIL_PASSWORD--////////////////

////////////////--SIGN_OUT--////////////////
export const signOutStartAC = () => ({
  type: SIGN_OUT_START,
})
export const signOutSuccessAC = () => ({
  type: SIGN_OUT_SUCCESS,
})
export const signOutFailedAC = (error) => ({
  type: SIGN_OUT_FAILED,
  payload: error,
})
////////////////--SIGN_OUT--////////////////

////////////////--CREATE_USER--////////////////
export const createUserEmailAndPasswordStartAC = (userData) => ({
  type: CREATE_USER_EMAIL_AND_PASSWORD_START,
  payload: userData,
})
export const createUserEmailAndPasswordSuccsesAC = (userData) => ({
  type: CREATE_USER_EMAIL_AND_PASSWORD_SUCCESS,
  payload: userData,
})
export const createUserEmailAndPasswordFailedAC = (error) => ({
  type: CREATE_USER_EMAIL_AND_PASSWORD_FAILED,
  payload: error,
})
////////////////--CREATE_USER--////////////////

////////////////--CREATE_USER--////////////////
export const toggleLoaderAC = () => ({
  type: TOGGLE_LOADER,
})
////////////////--CREATE_USER--////////////////
