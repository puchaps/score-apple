import { Link } from 'react-router-dom';

import './header.styles.scss';

import { LOGO_URL } from '../../../img/logo/logo';

const Header = () => {
  
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
      </div>
    </header>
  )
};

export default Header;