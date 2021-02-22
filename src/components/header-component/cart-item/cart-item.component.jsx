/* eslint-disable react/prop-types */
import React from "react"

import "./cart-item.styles.scss"

const CartItem = ({ imageUrl, name, quantity, price }) => (
  <div className="cart-item">
    <div className="name">{name}</div>
    <div className="image-and-descry">
      <img src={imageUrl} alt="item" className="image" />
      <div className="quantity-and-price">
        {quantity}x{price}
      </div>
    </div>
  </div>
)

export default CartItem
