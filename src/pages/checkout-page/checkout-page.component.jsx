import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout-page.styles.scss';

import { selectorCartCartItems, selectorTotalPriceAllItemsFromCart } from '../../redux/reducers/cart-reducer/selectors/cart.selectors';

import CheckoutTitle from '../../components/checkout-components/checkout-title/checkout-title.component';
import CheckoutItem from '../../components/checkout-components/checkout-item/checkout-item.component';

const CheckoutPage = ({ totalPriceAllItemsFromCart, cartItems }) => {
  const showItemsFromCart = cartItems.map(item => <CheckoutItem key = {item.id} item = {item}/>);

  return(
    <div className="checkout-page">
      <div className="checkout-header">
        <CheckoutTitle title = 'PRODUCT'/>
        <CheckoutTitle title = 'DESCRIPTION'/>
        <CheckoutTitle title = 'QUANTITY'/>
        <CheckoutTitle title = 'PRICE'/>
        <CheckoutTitle title = 'REMOVE'/>
      </div>
      <div className="checkout-items">
        {showItemsFromCart}
      </div>
      <div className="checkout-total">
        TOTAL: ${totalPriceAllItemsFromCart}
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  totalPriceAllItemsFromCart: selectorTotalPriceAllItemsFromCart,
  cartItems: selectorCartCartItems
})


export default connect(
  mapStateToProps
)(CheckoutPage);