/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./header.styles.scss"

import selectorToggleMenu from "../../../redux/reducers/mobile-reducer/selectors/mobile.selectors"

import MobileMenu from "../mobile-menu/mobile-menu.component"
import MobileLogo from "../mobile-logo/mobile-logo.component"
import HeaderLinks from "../header-links/header-links.component"

const Header = ({ onToggleMenu }) => (
  <header className="header">
    <MobileLogo />
    <HeaderLinks />
    {onToggleMenu && <MobileMenu />}
  </header>
)

const mapStateToProps = createStructuredSelector({
  onToggleMenu: selectorToggleMenu,
})

export default connect(mapStateToProps)(Header)
