import './collection-item.styles.scss';
import { setAttributeForMac, setAttributeForWatch } from './collection-item.utils';

const CollectionItem = ({ imageUrl, name, price }) => {
  const  resoleveMac = setAttributeForMac(name);
  const  resoleveWatch = setAttributeForWatch(name);

  return(
    <div className="collection-item">
      <div 
        className = {`image ${resoleveWatch ? 'watch' : ''} ${resoleveMac ? 'mac' : ''}`} 
        style = {{backgroundImage: `url(${imageUrl})`}}
      />
      <div className={`collection-footer ${resoleveMac ? 'mac' : ''}`}>
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
    </div>
  )
};

export default CollectionItem;