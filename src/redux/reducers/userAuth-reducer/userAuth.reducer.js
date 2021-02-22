import {
  CHECK_USER_SESSION_FAILED,
  CREATE_USER_EMAIL_AND_PASSWORD_FAILED,
  CREATE_USER_EMAIL_AND_PASSWORD_SUCCESS,
  SIGN_IN_WITH_EMAIL_PASSWORD_FAILED,
  SIGN_IN_WITH_EMAIL_PASSWORD_SUCCESS,
  SIGN_IN_WITH_GOOGLE_FAILED,
  SIGN_IN_WITH_GOOGLE_SUCCESS,
  SIGN_OUT_SUCCESS,
  TOGGLE_LOADER,
} from "./types/userAuth.types"

const INITIAL_STATE = {
  currentUser: null,
  loader: false,
  error: null,
}

const userAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_WITH_GOOGLE_SUCCESS:
    case SIGN_IN_WITH_EMAIL_PASSWORD_SUCCESS:
    case CREATE_USER_EMAIL_AND_PASSWORD_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      }
    case SIGN_IN_WITH_GOOGLE_FAILED:
    case CHECK_USER_SESSION_FAILED:
    case SIGN_IN_WITH_EMAIL_PASSWORD_FAILED:
    case CREATE_USER_EMAIL_AND_PASSWORD_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    case TOGGLE_LOADER:
      return {
        ...state,
        loader: !state.loader,
      }
    default:
      return state
  }
}

export default userAuthReducer
