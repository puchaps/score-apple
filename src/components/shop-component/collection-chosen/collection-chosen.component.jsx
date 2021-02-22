/* eslint-disable consistent-return */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"

import "./collection-chosen.styles.scss"

import { selectorChosenCollection } from "../../../redux/reducers/shop-reducer/selectors/shop.selectors"

import CollectionItem from "../collection-item/collection-item.component"

const CollectionChosen = ({ onChosenCollections }) => {
  if (!onChosenCollections) {
    return []
  }

  const { items } = onChosenCollections

  return (
    <div className="collection-chosen">
      <h2 className="collection-title">{onChosenCollections.title}</h2>
      <div className="collection">
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            title={onChosenCollections.title}
          />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  onChosenCollections: selectorChosenCollection(
    ownProps.match.params.collectionChosen
  )(state),
})

export default connect(mapStateToProps)(CollectionChosen)
