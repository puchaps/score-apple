import './checkout-item.styles.scss';

const CheckoutItem = ({item}) => {
  const{imageUrl, name, quantity, price} = item;
  
  return(
    <div className="checkout-item">
      <div className="checkout-image">
        <img src={imageUrl} alt="item"/>
      </div>
      <div className="checkout-descr">
        <div className="checkout-name">{name}</div>
        <div className="checkout-quantity">
          <span className="checkout-arrow-minus">&#10094;</span>
            {quantity}
          <span className="checkout-arrow-plus">&#10095;</span>
        </div>
        <div className="checkout-price">{price}</div>
        <div className="checkout-remove">&#10005;</div>
      </div>
    </div>
  )
};

export default CheckoutItem;