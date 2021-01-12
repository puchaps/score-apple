import { connect } from 'react-redux';

import './collection-item.styles.scss';

import { addItemToCartAC } from '../../../redux/reducers/cart-reducer/actions/cart.actions';

import GeneralButton from '../../custom-component/general-button/general-button.component'

const CollectionItem = ({item, title, addItemToCart }) => {  
  const{ imageUrl, name, price } = item;

  return(
    <div className={`collection-item ${title.toLowerCase()}`}>
      <div className="image">
        <img src={imageUrl} alt="item" className="img"/>
      </div>
      <div className={`collection-footer`}>
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <GeneralButton typeBtn = 'add-cart' onClick = {() => addItemToCart(item)}>
        ADD TO CART
      </GeneralButton>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemToCartAC(item))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
