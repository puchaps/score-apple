/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"

import "./collection-item.styles.scss"

import { addItemToCartAC } from "../../../redux/reducers/cart-reducer/actions/cart.actions"

import GeneralButton from "../../custom-component/general-button/general-button.component"

const CollectionItem = ({ item, title, handleAddItemToCart }) => {
  const { imageUrl, name, price } = item

  return (
    <div className={`collection-item ${title.toLowerCase()}`}>
      <div className="image">
        <img src={imageUrl} alt="item" className="img" />
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <div className="collection-item-btn">
        <GeneralButton
          onTypeBtn="add-cart"
          onClick={() => handleAddItemToCart(item)}
        >
          ADD TO CART
        </GeneralButton>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleAddItemToCart: (item) => dispatch(addItemToCartAC(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
