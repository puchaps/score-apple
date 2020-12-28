
import './product-item.styles.scss';

import PositionItem from '../position-item/position-item.component';

const ProductItem = ({title, items}) => {
  const mapMithUseItems = items.map( ({id, ...otherDataProps}) => {
    return(
      <PositionItem key = {id} {...otherDataProps}/>
    )
  });
  
  return(
    <div className="product-item">
      <div className="tittle-item" style = {{color: 'red'}}>
        {title.toUpperCase()}
      </div>
      <div className="positions" style = {{border: '1px solid black'}}>
        {mapMithUseItems}
      </div>
    </div>
  )
};

export default ProductItem;