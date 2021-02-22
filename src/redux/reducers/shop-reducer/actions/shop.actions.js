import {
  GET_COLLECTIONS_FAILED,
  GET_COLLECTIONS_START,
  GET_COLLECTIONS_SUCCESS,
  TOGGLE_LOADER,
} from "../types/shop.types"

export const getCollectionStartAC = () => ({
  type: GET_COLLECTIONS_START,
})
export const getCollectionSuccessAC = (collections) => ({
  type: GET_COLLECTIONS_SUCCESS,
  payload: collections,
})
export const getCollectionFailedAC = (error) => ({
  type: GET_COLLECTIONS_FAILED,
  payload: error,
})

export const toggleLoaderAC = () => ({
  type: TOGGLE_LOADER,
})
