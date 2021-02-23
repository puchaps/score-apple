/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import "./header-links.styles.scss"

import { signOutStartAC } from "../../../redux/reducers/userAuth-reducer/actions/userAuth.actions"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

const HeaderLinks = () => {
  const onCurrentUser = useSelector((state) => state.userAuth.currentUser)
  const onHidden = useSelector((state) => state.cart.hidden)
  const dispatch = useDispatch()

  return (
    <div className="header-link">
      <Link className="link" to="/">
        HOME
      </Link>
      <Link className="link" to="/shop">
        APPLE STORE
      </Link>
      {onCurrentUser ? (
        <div className="sign-out" onClick={() => dispatch(signOutStartAC())}>
          SIGN OUT
        </div>
      ) : (
        <Link className="link" to="/login">
          SIGN IN
        </Link>
      )}
      <CartIcon />
      {onHidden ? <CartDropdown /> : null}
    </div>
  )
}

export default HeaderLinks
