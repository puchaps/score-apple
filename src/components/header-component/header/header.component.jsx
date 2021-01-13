import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

import { LOGO_URL } from '../../../img/logo/logo';
import { AUTH } from '../../../firebase/firebase.utils';
import { selectorUserAuthCurrentUser } from '../../../redux/reducers/userAuth-reducer/selectors/userAuth.selectors';
import { selectorCartHidden } from '../../../redux/reducers/cart-reducer/selectors/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
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
        <Link className="link" to = '/shop'>
          CONTENT
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
        <CartIcon/>
      </div>
      { hidden ? <CartDropdown/> : null}
    </header>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectorUserAuthCurrentUser,
  hidden: selectorCartHidden
})

export default  connect(
  mapStateToProps)
(Header);