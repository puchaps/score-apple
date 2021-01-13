import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import GeneralButton from '../../custom-component/general-button/general-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, hidden }) => {
  const showAddedItemsFromCart = cartItems.map( item => <CartItem key = {item.id} {...item}/>);

  return(
    <div className={`cart-dropdown ${hidden ? 'fixsed' : ''}`}>
      <div className="choosed-items">
        {
          showAddedItemsFromCart
        }
      </div>
        <GeneralButton typeBtn = 'go-to'>
          GO TO CHECKOUT
        </GeneralButton>
    </div>
  )
};

const mapStateToPtops = (state) => {
  return {
    cartItems: state.cart.cartItems,
    hidden: state.cart.hidden
  }
}

export default connect(
  mapStateToPtops
)(CartDropdown);