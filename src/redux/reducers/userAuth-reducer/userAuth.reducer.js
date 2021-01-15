import { 
  CHECK_USER_SESION_FAILED,
  CREATE_USER_EMAIL_AND_PASSWORD_FAILED,
  CREATE_USER_EMAIL_AND_PASSWORD_SUCCSES,
  SIGN_IN_WITH_EMAIL_PASSWODR_FAILED,
  SIGN_IN_WITH_EMAIL_PASSWODR_SUCCSES,
  SIGN_IN_WITH_GOOGLE_FAILED,
  SIGN_IN_WITH_GOOGLE_SUCCSES,
  SIGN_OUT_SUCCSES
} from "./types/userAuth.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userAuthReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN_WITH_GOOGLE_SUCCSES:
    case SIGN_IN_WITH_EMAIL_PASSWODR_SUCCSES:
    case CREATE_USER_EMAIL_AND_PASSWORD_SUCCSES:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case SIGN_OUT_SUCCSES:
      return {
        ...state,
        currentUser: null
      };
    case SIGN_IN_WITH_GOOGLE_FAILED:
    case CHECK_USER_SESION_FAILED:
    case SIGN_IN_WITH_EMAIL_PASSWODR_FAILED:
    case CREATE_USER_EMAIL_AND_PASSWORD_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default: 
      return state;
  }
};

export default userAuthReducer;