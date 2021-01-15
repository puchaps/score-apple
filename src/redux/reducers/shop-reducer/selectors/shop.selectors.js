import { createSelector } from "reselect";

const selectorShop = (state) => state.shop;

export const selectorCollections = createSelector(
  [selectorShop],
  (shop) => shop.collections
);

export const selectorGetCoosedCollection = getChoosedCollection => (
  createSelector(
    [selectorCollections],
    (collections) => collections.find(item => {
      if (item.title.toLowerCase() === getChoosedCollection.toLowerCase()) {
        return item;
      };
    })
  )
);