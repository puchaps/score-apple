import './cart-item.styles.scss';

const CartItem = ({ imageUrl, name, quantity, price }) => {
  return(
    <div className="cart-item">
      <div className="name">
          {name}
      </div>
      <div className="image-and-descr">
        <img src = {imageUrl} alt = "photo-item" className="image"/>
        <div className="quantity-and-price">
          {quantity}
            x
          {price}
        </div>
      </div>
    </div>
  )
};

export default CartItem;