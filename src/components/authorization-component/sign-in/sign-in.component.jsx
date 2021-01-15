import React from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import {
  signInWithEmailPasswordStartAC, signInWithGoogleStartAC
} from '../../../redux/reducers/userAuth-reducer/actions/userAuth.actions';

import FormInput from '../../custom-component/form-input/form-input.component';
import GeneralButton from '../../custom-component/general-button/general-button.component';


class SignIn extends React.Component{
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const{signInWithEmailPasswordStart} = this.props;
    const{email, password} = this.state;

    signInWithEmailPasswordStart(email, password);

    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = (event) => {
    const{name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const{email, password} = this.state;
    const{signInWithGoogleStart} = this.props;
    
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
              onClick = {signInWithGoogleStart} 
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

const mapDispatchToProps = (dispath) => ({
  signInWithGoogleStart: () => dispath(signInWithGoogleStartAC()),
  signInWithEmailPasswordStart: (email, password) => dispath(signInWithEmailPasswordStartAC({email, password}))
})

export default connect(
  null,
  mapDispatchToProps
)(SignIn);