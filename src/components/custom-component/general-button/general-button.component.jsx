/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"

import "./general-button.styles.scss"

const GeneralButton = ({ children, onTypeBtn = "", ...otherProps }) => (
  <button className={`general-button ${onTypeBtn}`} {...otherProps}>
    {children}
  </button>
)

export default GeneralButton
