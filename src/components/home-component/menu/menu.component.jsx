/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"

import "./menu.styles.scss"

import { selectorCollections } from "../../../redux/reducers/shop-reducer/selectors/shop.selectors"

import MenuItem from "../menu-item/menu-item.component"

const Menu = ({ onCollections }) => (
  <menu>
    <div className="menu">
      {onCollections.map(({ title, id }) => (
        <MenuItem key={id} title={title} />
      ))}
    </div>
  </menu>
)

const mapStateToProps = (state) => ({
  onCollections: selectorCollections(state),
})

export default connect(mapStateToProps)(Menu)
