import { Link } from 'react-router-dom';

import './header.styles.scss';

import { LOGO_URL } from '../../../img/logo/logo';
import { AUTH } from '../../../firebase/firebase.utils';

const Header = ({currentUser}) => {
  return(
    <header className="header">
      <div className="container-logo">
        <Link to = '/'>
          <img src={LOGO_URL} alt="logo" className="logo"/>
        </Link>
      </div>
      <div className="nav-link">
        <Link className="link" to = '/shop'>
          APPLE STORE
        </Link>
        <Link className="link" to = '/login'>
          LOGIN
        </Link>
        {
          currentUser ?
            (<div className="sign-out" onClick = {() => AUTH.signOut()}>
              SIGN OUT
            </div>)
          :
            (<Link className="link" to = '/login'>
              SIGN IN
            </Link>)
        }
      </div>
    </header>
  )
};

export default Header;