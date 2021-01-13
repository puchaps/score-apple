import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { 
  addItemToCartAC,
  reduceChooserValueInItemAC, removeChoosedItemFromCartAC
} from '../../../redux/reducers/cart-reducer/actions/cart.actions';


const CheckoutItem = ({item, addItemToCart, removeChoosedItemFromCart, reduceChooserValueInItem }) => {
  const{imageUrl, name, quantity, price} = item;
  
  return(
    <div className="checkout-item">
      <div className="checkout-image">
        <img src={imageUrl} alt="item"/>
      </div>
      <div className="checkout-descr">
        <div className="checkout-name">{name}</div>
        <div className="checkout-quantity">
          <span className="checkout-arrow-minus" onClick = {() => reduceChooserValueInItem(item)}>
            &#10094;
          </span>
            {quantity}
          <span className="checkout-arrow-plus" onClick = {() => addItemToCart(item)}>
            &#10095;
          </span>
        </div>
        <div className="checkout-price">{price}</div>
        <div className="checkout-remove" onClick = {() => removeChoosedItemFromCart(item)}>
          &#10005;
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeChoosedItemFromCart: (item) => dispatch(removeChoosedItemFromCartAC(item)),
    reduceChooserValueInItem: (item) => dispatch(reduceChooserValueInItemAC(item)),
    addItemToCart: (item) => dispatch(addItemToCartAC(item))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);