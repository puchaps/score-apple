import { GET_COLLECTIONS_FROM_FIRESTORE } from "../types/shop.types";

export const getCollectionsFromFirestoreAC= (collections) => ({
  type: GET_COLLECTIONS_FROM_FIRESTORE,
  payload: collections
});