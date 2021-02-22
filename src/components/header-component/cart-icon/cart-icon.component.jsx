/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./cart-icon.styles.scss"

import { toggleCartHiddenAC } from "../../../redux/reducers/cart-reducer/actions/cart.actions"

import {
  selectorAddedItemsFromCart,
  selectorCartHidden,
} from "../../../redux/reducers/cart-reducer/selectors/cart.selectors"

const CartIcon = ({ onQuantityItems, onHidden, handleToggleCartHidden }) => (
  <div
    className={`cart-icon ${onHidden ? "show" : ""}`}
    onClick={() => handleToggleCartHidden()}
  >
    <div className="image">
      <img
        src="https://cdn2.iconfinder.com/data/icons/4web-3/139/bag-256.png"
        alt="cart"
      />
    </div>
    <div className="chosen-items">{onQuantityItems}</div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  onQuantityItems: selectorAddedItemsFromCart,
  onHidden: selectorCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
  handleToggleCartHidden: () => dispatch(toggleCartHiddenAC()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
