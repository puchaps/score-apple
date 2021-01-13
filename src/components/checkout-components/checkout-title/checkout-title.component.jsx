import './checkout-title.styles.scss';

const CheckoutTitle = ({title}) => {
  return(
    <div className="checkout-title">
      <div className="title">
        {title}
      </div>
    </div>
  )
};

export default CheckoutTitle;