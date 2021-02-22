/* eslint-disable react/prop-types */
import React from "react"

import "./slider-item.styles.scss"

const SliderItem = ({ imageUrl }) => (
  <div className="slider-item">
    <img src={imageUrl} alt="product" />
  </div>
)

export default SliderItem
