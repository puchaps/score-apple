
import './authorization-page.styles.scss';

import SignIn from '../../components/authorization-component/sign-in/sign-in.component';
import SignUp from '../../components/authorization-component/sign-up/sign-up.component';

const AuthorizationPage = () => {
  return(
    <div className="authorization-page">
      <SignIn/>
      <SignUp/>
    </div>
  )
};

export default AuthorizationPage;