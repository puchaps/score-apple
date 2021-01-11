import React from 'react';

import './sign-up.styles.scss';

import { AUTH, createUserAuthInFireStore } from '../../../firebase/firebase.utils';

import FormInput from '../../custom-component/form-input/form-input.component';
import GeneralButton from '../../custom-component/general-button/general-button.component';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = (event) => {
    const{name, value} = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const{displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert("Your password don't match");
      return;
    }

    try {
      const{user} = await AUTH.createUserWithEmailAndPassword(email, password);

      await createUserAuthInFireStore(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch(error) {
      console.log(error.message);
    }
  }
  render() {
    const{displayName, email, password, confirmPassword} = this.state;

    return(
      <div className="sign-up">
        <h2 className="sign-up-title">
          I don't have a account
        </h2>
        <span className="sign-up-subtitle">
          Sign up with your email and password
        </span>
        <form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
          <FormInput
            name = 'displayName'
            type = 'text'
            value = {displayName}
            label = 'Display Name'
            handleChange = {this.handleChange}
            required
          />
          <FormInput
            name = 'email'
            type = 'email'
            value = {email}
            label = 'Email'
            handleChange = {this.handleChange}
            required
          />
          <FormInput
            name = 'password'
            type = 'password'
            value = {password}
            label = 'Password'
            handleChange = {this.handleChange}
            required
          />
          <FormInput
            name = 'confirmPassword'
            type = 'password'
            value = {confirmPassword}
            label = 'Confirm Password'
            handleChange = {this.handleChange}
            required
          />
          <GeneralButton>SIGN UP</GeneralButton>
        </form>
      </div>
    )
  }
};

export default SignUp;