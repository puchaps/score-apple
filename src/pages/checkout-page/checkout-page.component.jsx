/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { Redirect } from "react-router-dom"

import "./checkout-page.styles.scss"

import {
  selectorCartCartItems,
  selectorTotalPriceAllItemsFromCart,
} from "../../redux/reducers/cart-reducer/selectors/cart.selectors"

import CheckoutItem from "../../components/checkout-components/checkout-item/checkout-item.component"

const CheckoutPage = ({ onTotalPrice, onCartItems }) => {
  if (onTotalPrice === 0) {
    return <Redirect to="/shop" />
  }

  return (
    <div className="checkout-page">
      {onCartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="checkout-total">TOTAL: ${onTotalPrice}</div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  onTotalPrice: selectorTotalPriceAllItemsFromCart,
  onCartItems: selectorCartCartItems,
})

export default connect(mapStateToProps)(CheckoutPage)
