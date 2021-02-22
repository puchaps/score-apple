/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"

import "./checkout-item.styles.scss"

import {
  addItemToCartAC,
  reduceChosenValueInItemAC,
  removeChosenItemFromCartAC,
} from "../../../redux/reducers/cart-reducer/actions/cart.actions"

const CheckoutItem = ({
  item,
  handleAddItem,
  handleRemoveItem,
  handleReduceItem,
}) => {
  const { imageUrl, name, quantity, price } = item

  return (
    <div className="checkout-item">
      <div className="checkout-image">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="checkout-descry">
        <div className="checkout-name">{name}</div>
        <div className="checkout-quantity">
          <span
            className="checkout-arrow-minus"
            onClick={() => handleReduceItem(item)}
          >
            &#10094;
          </span>
          {quantity}
          <span
            className="checkout-arrow-plus"
            onClick={() => handleAddItem(item)}
          >
            &#10095;
          </span>
        </div>
        <div className="checkout-price">{price}</div>
        <div className="checkout-remove" onClick={() => handleRemoveItem(item)}>
          &#10005;
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleRemoveItem: (item) => dispatch(removeChosenItemFromCartAC(item)),
  handleReduceItem: (item) => dispatch(reduceChosenValueInItemAC(item)),
  handleAddItem: (item) => dispatch(addItemToCartAC(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
