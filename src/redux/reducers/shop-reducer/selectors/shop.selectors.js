/* eslint-disable no-debugger */
import { createSelector } from "reselect"

const selectorShop = (state) => state.shop

export const selectorCollections = createSelector([selectorShop], (shop) =>
  shop.collections ? shop.collections : []
)

export const selectorChosenCollection = (chosenCollection) =>
  createSelector(
    [selectorCollections],
    (collections) =>
      collections.length > 1 &&
      collections.find(
        (item) => item.title.toLowerCase() === chosenCollection.toLowerCase()
      )
  )

export const selectorLoader = createSelector(
  [selectorShop],
  (shop) => shop.loader
)
