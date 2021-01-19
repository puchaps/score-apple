import { GET_COLLECTIONS_FAILED, GET_COLLECTIONS_START, GET_COLLECTIONS_SUCCSES } from "../types/shop.types";

export const getCollectionStartAC= () => ({
  type: GET_COLLECTIONS_START,
});
export const getCollectionSuccsesAC = (collections) => ({
  type: GET_COLLECTIONS_SUCCSES,
  payload: collections
});
export const getCollectionFailedAC = (error) => ({
  type: GET_COLLECTIONS_FAILED,
  payload: error
});