import './cart-dropdown.styles.scss';

import GeneralButton from '../../custom-component/general-button/general-button.component';

const CartDropdown = () => {
  return(
    <div className="cart-dropdown">
      <div className="choosed-items">

      </div>
      <GeneralButton bgColor = 'red'>
        BUTTON
      </GeneralButton>
    </div>
  )
};

export default CartDropdown;