import React from 'react';

import './sign-in.styles.scss';

import { AUTH, signInWithGoogleAcount } from '../../../firebase/firebase.utils';

import FormInput from '../../custom-component/form-input/form-input.component';
import GeneralButton from '../../custom-component/general-button/general-button.component';

class SignIn extends React.Component{
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const{email, password} = this.state;

    try {
      await AUTH.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: ''
      });
    } catch(error) {
      console.log(error.message);
    }
  };

  handleChange = (event) => {
    const{name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const{email, password} = this.state;
    return(
      <div className="sign-in">
        <h2 className="sign-in-title">I aleady have an account</h2>
        <div className="sign-in-subtitle">Sign in with your email and password</div>
        <form className="sign-in-form" onSubmit = {this.handleSubmit}>
          <FormInput 
            name = 'email'
            type = 'email'
            label = 'Email'
            value = {email}
            required
            handleChange = {this.handleChange}
          />
          <FormInput
            name = 'password'
            type = 'password'
            label = 'Password'
            value = {password}
            required
            handleChange = {this.handleChange}
          />
          <div className="sign-in-btns">
            <GeneralButton>Sing in</GeneralButton>
            <GeneralButton 
              onClick = {signInWithGoogleAcount} 
              typeBtn = 'google'
              type = 'button'>
                Sing in with Google
            </GeneralButton>
          </div>
        </form>
      </div>
    )
  }
};

export default SignIn;