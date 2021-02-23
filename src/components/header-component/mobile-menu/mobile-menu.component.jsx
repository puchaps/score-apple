/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"

import "./mobile-menu.styles.scss"

import { selectorCollections } from "../../../redux/reducers/shop-reducer/selectors/shop.selectors"

import MenuItem from "../../home-component/menu-item/menu-item.component"

const MobileMenu = ({ onCollections }) => (
  <div className="mobile-menu">
    {onCollections.map((item) => (
      <MenuItem key={item.id} title={item.title} />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  onCollections: selectorCollections(state),
})

export default connect(mapStateToProps)(MobileMenu)
