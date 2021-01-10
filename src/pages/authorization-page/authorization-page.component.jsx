import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './authorization-page.styles.scss';

import SignIn from '../../components/authorization-component/sign-in/sign-in.component';
import SignUp from '../../components/authorization-component/sign-up/sign-up.component';

const AuthorizationPage = ({ currentUser }) => {
  if (currentUser) {
    return <Redirect to = '/'/>
  }
  return(
    <div className="authorization-page">
      <SignIn/>
      <SignUp/>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userAuth.currentUser
  }
};

export default  connect(mapStateToProps)(AuthorizationPage);