/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"

import "./sign-in.styles.scss"

import {
  signInWithEmailPasswordStartAC,
  signInWithGoogleStartAC,
} from "../../../redux/reducers/userAuth-reducer/actions/userAuth.actions"

import GeneralButton from "../../custom-component/general-button/general-button.component"

const SignIn = ({
  handleSignInWithEmailPasswordStart,
  handleSignInGoogleStart,
}) => {
  const { register, handleSubmit } = useForm()
  const handleInputSubmit = ({ email, password }) => {
    handleSignInWithEmailPasswordStart(email, password)
  }
  return (
    <div className="sign-in">
      <h2 className="sign-in-title">I already have an account</h2>
      <div className="sign-in-subtitle">
        Sign in with your email and password
      </div>
      <form className="sign-in-form" onSubmit={handleSubmit(handleInputSubmit)}>
        <input
          className="sign-in-input"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        <input
          className="sign-in-input"
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        <div className="sign-in-btns">
          <GeneralButton>Sing in</GeneralButton>
          <GeneralButton
            onClick={handleSignInGoogleStart}
            onTypeBtn="google"
            type="button"
          >
            Sing in with Google
          </GeneralButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleSignInGoogleStart: () => dispatch(signInWithGoogleStartAC()),
  handleSignInWithEmailPasswordStart: (email, password) =>
    dispatch(signInWithEmailPasswordStartAC({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
