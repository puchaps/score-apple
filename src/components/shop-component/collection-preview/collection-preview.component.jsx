/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react"
import { useHistory, useRouteMatch } from "react-router-dom"

import "./collection-preview.styles.scss"

import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreview = ({ title, items }) => {
  const history = useHistory()
  const match = useRouteMatch()

  return (
    <div className="collection-preview">
      <div
        className="title"
        onClick={() => history.push(`${match.path}/${title}`)}
      >
        {title}
      </div>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} title={title} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
