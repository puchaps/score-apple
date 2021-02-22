/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { createStructuredSelector } from "reselect"

import "./cart-dropdown.styles.scss"

import { toggleCartHiddenAC } from "../../../redux/reducers/cart-reducer/actions/cart.actions"
import { selectorCartCartItems } from "../../../redux/reducers/cart-reducer/selectors/cart.selectors"

import GeneralButton from "../../custom-component/general-button/general-button.component"
import CartItem from "../cart-item/cart-item.component"

const CartDropdown = ({ onCartItems, handleToggleCartHidden }) => {
  const history = useHistory()

  const handleButtonOnClick = () => {
    handleToggleCartHidden()
    history.push("/checkout")
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown-items">
        {onCartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="cart-dropdown-btn">
        <GeneralButton onTypeBtn="go-to" onClick={handleButtonOnClick}>
          GO TO CHECKOUT
        </GeneralButton>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  onCartItems: selectorCartCartItems,
})

const mapDispatchToProps = (dispatch) => ({
  handleToggleCartHidden: () => dispatch(toggleCartHiddenAC()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
