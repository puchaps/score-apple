import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

import { LOGO_URL } from '../../../img/logo/logo';
import { selectorUserAuthCurrentUser } from '../../../redux/reducers/userAuth-reducer/selectors/userAuth.selectors';
import { selectorCartHidden } from '../../../redux/reducers/cart-reducer/selectors/cart.selectors';
import { signOutStartAC } from '../../../redux/reducers/userAuth-reducer/actions/userAuth.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden, signOutStart}) => {
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
        {
          currentUser ?
            (<div className="sign-out" onClick = {signOutStart}>
              SIGN OUT
            </div>)
          :
            (<Link className="link" to = '/login'>
              SIGN IN
            </Link>)
        }
        <CartIcon/>
        { hidden ? <CartDropdown/> : null}
      </div>
      
    </header>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectorUserAuthCurrentUser,
  hidden: selectorCartHidden
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStartAC())
})

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);