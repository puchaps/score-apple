import React from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';

import { 
  createUserEmailAndPasswordStartAC 
} from '../../../redux/reducers/userAuth-reducer/actions/userAuth.actions';

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

  handleSubmit = (event) => {
    event.preventDefault();

    const{createUserEmailAndPasswordStart} = this.props;
    const{displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert("Your password don't match");
      return;
    }

    createUserEmailAndPasswordStart(email, password, displayName);

    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
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

const mapDispatchToProps = (dispatch) => ({
  createUserEmailAndPasswordStart: (email, password, displayName) => (
    dispatch(createUserEmailAndPasswordStartAC({email, password, displayName}))
  )
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);