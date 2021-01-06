import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../custom-component/form-input/form-input.component';
import GeneralButton from '../custom-component/general-button/general-button.component';

class SignIn extends React.Component{
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
    console.log(this.state)
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
        <form className="sign-form" onSubmit = {this.handleSubmit}>
          <FormInput 
            name = 'email'
            type = 'email'
            label = 'email'
            value = {email}
            required
            handleChange = {this.handleChange}
          />
          <FormInput
            name = 'password'
            type = 'password'
            label = 'password'
            value = {password}
            required
            handleChange = {this.handleChange}
          />
          <GeneralButton type = 'sumbit'>Sing in</GeneralButton>
        </form>
      </div>
    )
  }
};

export default SignIn;