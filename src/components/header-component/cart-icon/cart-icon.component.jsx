import './cart-icon.styles.scss';

import { ReactComponent as Cart } from '../../../img/cart/cart.svg';

const CartIcon = () => {
  return(
    <div className="cart-icon">
      <div className="image">
        <Cart className = 'img'/>
      </div>
      <span className="choosed-items">
        0
      </span>
    </div>
  )
};

export default CartIcon;