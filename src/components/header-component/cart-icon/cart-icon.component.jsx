import { connect } from 'react-redux';

import './cart-icon.styles.scss';

import { ReactComponent as Cart } from '../../../img/cart/cart.svg';
import { toggleCartHidden } from '../../../redux/reducers/cart-reducer/actions/cart.actions';


const CartIcon = ({ toggleCartHidden }) => {
  return(
    <div className="cart-icon" onClick = {() => toggleCartHidden()}>
      <div className="image">
        <Cart className = 'img'/>
      </div>
      <span className="choosed-items">
        0
      </span>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);