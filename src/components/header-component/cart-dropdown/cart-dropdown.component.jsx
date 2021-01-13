import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'; 

import './cart-dropdown.styles.scss';

import { toggleCartHiddenAC } from '../../../redux/reducers/cart-reducer/actions/cart.actions';
import { 
  selectorCartCartItems, selectorCartHidden
} from '../../../redux/reducers/cart-reducer/selectors/cart.selectors' 

import GeneralButton from '../../custom-component/general-button/general-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, hidden, history, toggleCartHidden }) => {
  const showAddedItemsFromCart = cartItems.map( item => <CartItem key = {item.id} {...item}/>);

  return(
    <div className={`cart-dropdown ${hidden ? 'fixsed' : ''}`}>
      <div className="choosed-items">
        {
          showAddedItemsFromCart
        }
      </div>
        <GeneralButton typeBtn = 'go-to' onClick = {() => {
          toggleCartHidden();
          history.push('/checkout');
          }}
        >
          GO TO CHECKOUT
        </GeneralButton>
    </div>
  )
};

const mapStateToPtops = createStructuredSelector({
  cartItems: selectorCartCartItems,
  hidden: selectorCartHidden
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHiddenAC())
  }
}

export default withRouter(
  connect(
    mapStateToPtops,
    mapDispatchToProps
  )(CartDropdown)
);