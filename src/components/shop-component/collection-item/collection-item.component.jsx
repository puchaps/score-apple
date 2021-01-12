import './collection-item.styles.scss';

import GeneralButton from '../../custom-component/general-button/general-button.component'

const CollectionItem = ({ imageUrl, name, price, title }) => {  
  return(
    <div className={`collection-item ${title.toLowerCase()}`}>
      <div className="image">
        <img src={imageUrl} alt="item" className="img"/>
      </div>
      <div className={`collection-footer`}>
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <GeneralButton bgColor = 'greey'>
        ADD TO CART
      </GeneralButton>
    </div>
  )
};

export default CollectionItem;
