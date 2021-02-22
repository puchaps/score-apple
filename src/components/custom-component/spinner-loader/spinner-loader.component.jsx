/* eslint-disable no-debugger */
import React from "react"

import "./spinner-loader.styles.scss"

const SpinnerLoader = ({ onLoader, children }) => {
  if (onLoader) {
    return (
      <img
        className="spinner-loader"
        src="https://www.flaticon.com/svg/vstatic/svg/455/455690.svg?token=exp=1613996108~hmac=1ca27ce132e9ba7a439d3dbb60a57bbb"
        alt="loader"
      />
    )
  }
  return children
}

export default SpinnerLoader
