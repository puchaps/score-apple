/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import { useDispatch, useSelector } from "react-redux"

import "./mobile-logo.styles.scss"

import toggleMobileMenuAC from "../../../redux/reducers/mobile-reducer/actions/mobile.actions"

const MobileLogo = () => {
  const onToggleMenu = useSelector((state) => state.mobile.toggleMenu)
  const dispatch = useDispatch()

  return (
    <>
      <div className="header-logo">
        <img
          src="https://cdn0.iconfinder.com/data/icons/social-91/32/Social_social_apple_macbook_iphone-512.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="header-mobile-img">
        {!onToggleMenu ? (
          <img
            src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_menu-512.png"
            alt="logo"
            className="mobile-img"
            onClick={() => dispatch(toggleMobileMenuAC())}
          />
        ) : (
          <img
            src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/cancel_close_delete_remove_reject-512.png"
            alt="logo"
            className="mobile-img"
            onClick={() => dispatch(toggleMobileMenuAC())}
          />
        )}
      </div>
    </>
  )
}

export default MobileLogo
