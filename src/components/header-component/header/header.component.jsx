/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./header.styles.scss"

import { selectorCurrentUser } from "../../../redux/reducers/userAuth-reducer/selectors/userAuth.selectors"
import { selectorCartHidden } from "../../../redux/reducers/cart-reducer/selectors/cart.selectors"
import { signOutStartAC } from "../../../redux/reducers/userAuth-reducer/actions/userAuth.actions"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

const Header = ({ onCurrentUser, onHidden, handleSignOutStart }) => (
  <header className="header">
    <div className="header-logo">
      <Link to="/">
        <img
          src="https://cdn0.iconfinder.com/data/icons/social-91/32/Social_social_apple_macbook_iphone-512.png"
          alt="logo"
          className="logo"
        />
      </Link>
    </div>
    <div className="header-link">
      <Link className="link" to="/shop">
        APPLE STORE
      </Link>
      {onCurrentUser ? (
        <div className="sign-out" onClick={handleSignOutStart}>
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
  </header>
)

const mapStateToProps = createStructuredSelector({
  onCurrentUser: selectorCurrentUser,
  onHidden: selectorCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
  handleSignOutStart: () => dispatch(signOutStartAC()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
