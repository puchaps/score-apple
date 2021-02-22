/* eslint-disable no-debugger */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from "react"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"

import "./sign-up.styles.scss"

import { createUserEmailAndPasswordStartAC } from "../../../redux/reducers/userAuth-reducer/actions/userAuth.actions"

import GeneralButton from "../../custom-component/general-button/general-button.component"

const SignUp = ({ handleCreateUserEmailAndPasswordStart }) => {
  const { register, handleSubmit } = useForm()

  const handleInputSubmit = ({
    email,
    password,
    displayName,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      alert("Your password don't match")
      return
    }

    handleCreateUserEmailAndPasswordStart(email, password, displayName)
  }
  return (
    <div className="sign-up">
      <h2 className="sign-up-title">I do not have a account</h2>
      <span className="sign-up-subtitle">
        Sign up with your email and password
      </span>
      <form className="sign-up-form" onSubmit={handleSubmit(handleInputSubmit)}>
        <input
          className="sign-up-input"
          name="displayName"
          type="text"
          placeholder="DisplayName"
          ref={register({ required: true })}
        />
        <input
          className="sign-up-input"
          name="email"
          type="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        <input
          className="sign-up-input"
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        <input
          className="sign-up-input"
          name="confirmPassword"
          type="password"
          placeholder="ConfirmPassword"
          ref={register({ required: true })}
        />
        <div className="sign-up-btn">
          <GeneralButton>SIGN UP</GeneralButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleCreateUserEmailAndPasswordStart: (email, password, displayName) =>
    dispatch(
      createUserEmailAndPasswordStartAC({ email, password, displayName })
    ),
})

export default connect(null, mapDispatchToProps)(SignUp)
