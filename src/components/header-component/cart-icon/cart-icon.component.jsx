import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';

import { ReactComponent as Cart } from '../../../img/cart/cart.svg';
import { toggleCartHiddenAC } from '../../../redux/reducers/cart-reducer/actions/cart.actions';

import { selectorAddedsItemsFromCart, selectorCartHidden } from '../../../redux/reducers/cart-reducer/selectors/cart.selectors';


const CartIcon = ({ addedsItemsFromCart, hidden, toggleCartHidden }) => {
  return(
    <div className = {`cart-icon ${hidden ? 'show' : ''}`} onClick = {() => toggleCartHidden()}>
      <div className="image">
        <Cart className = 'img'/>
      </div>
      <div className="choosed-items">
        {
          addedsItemsFromCart
        }
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  addedsItemsFromCart: selectorAddedsItemsFromCart,
  hidden: selectorCartHidden
})

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHiddenAC())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);