import { SET_CURRENT_USER } from "../types/userAuth.types";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
};