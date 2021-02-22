/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { connect } from "react-redux"

import "./collection-all.styles.scss"

import { selectorCollections } from "../../../redux/reducers/shop-reducer/selectors/shop.selectors"

import CollectionPreview from "../collection-preview/collection-preview.component"

const CollectionAll = ({ onCollections }) => (
  <div className="collection-all">
    <div className="collection-all-title">
      <h1>ALL CATALOG</h1>
    </div>
    {onCollections.map(({ id, ...otherDataProps }) => (
      <CollectionPreview key={id} {...otherDataProps} />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  onCollections: selectorCollections(state),
})

export default connect(mapStateToProps)(CollectionAll)
