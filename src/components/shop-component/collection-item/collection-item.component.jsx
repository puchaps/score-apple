import './collection-item.styles.scss';

const CollectionItem = ({ imageUrl, name, price, title }) => {
  let additionalClass;
  if (title == 'MacBock' || title == 'AirPods' || title == 'iPad' || title == 'AirPods' || title == 'AppleWatch') {
    additionalClass = title.toLowerCase();
  } else {
    additionalClass = ''
  }
  
  return(
    <div className={`collection-item ${additionalClass}`}>
      <div className="image">
        <img src={imageUrl} alt="item" className="img"/>
      </div>
      <div className={`collection-footer`}>
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
    </div>
  )
};

export default CollectionItem;
