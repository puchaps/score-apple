/* eslint-disable react/prop-types */
import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

import "./authorization-page.styles.scss"

import {
  selectorCurrentUser,
  selectorLoader,
} from "../../redux/reducers/userAuth-reducer/selectors/userAuth.selectors"

import SignIn from "../../components/authorization-component/sign-in/sign-in.component"
import SignUp from "../../components/authorization-component/sign-up/sign-up.component"
import SpinnerLoader from "../../components/custom-component/spinner-loader/spinner-loader.component"

const AuthorizationPage = ({ onCurrentUser, onLoader }) => {
  if (onCurrentUser) {
    return <Redirect to="/" />
  }

  return (
    <div className="authorization-page">
      <SpinnerLoader onLoader={onLoader}>
        <SignIn />
        <SignUp />
      </SpinnerLoader>
    </div>
  )
}

const mapStateToProps = (state) => ({
  onCurrentUser: selectorCurrentUser(state),
  onLoader: selectorLoader(state),
})

export default connect(mapStateToProps)(AuthorizationPage)
