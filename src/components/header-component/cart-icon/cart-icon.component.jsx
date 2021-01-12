import { connect } from 'react-redux';

import './cart-icon.styles.scss';

import { ReactComponent as Cart } from '../../../img/cart/cart.svg';
import { toggleCartHiddenAC } from '../../../redux/reducers/cart-reducer/actions/cart.actions';


const CartIcon = ({ cartItems, hidden, toggleCartHidden }) => {
  const showAllItemsInCart = cartItems.reduce((initialValue, item) => item.quantity + initialValue, 0);

  return(
    <div className = {`cart-icon ${hidden ? 'show' : ''}`} onClick = {() => toggleCartHidden()}>
      <div className="image">
        <Cart className = 'img'/>
      </div>
      <div className="choosed-items">
        {
          showAllItemsInCart
        }
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    hidden: state.cart.hidden
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHiddenAC())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);