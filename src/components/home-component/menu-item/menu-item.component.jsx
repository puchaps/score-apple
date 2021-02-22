/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from "react"

import "./menu-item.styles.scss"

import { useHistory } from "react-router"

const MenuItem = ({ title }) => {
  const history = useHistory()

  return (
    <div className="menu-item">
      <button onClick={() => history.push(`/shop/${title}`)} type="button">
        {title}
      </button>
    </div>
  )
}

export default MenuItem
