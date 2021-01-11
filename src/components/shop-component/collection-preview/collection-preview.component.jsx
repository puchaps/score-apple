
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => {
  const mapMithUseItems = items.filter( (item, index) => index < 4)
    .map( ({id, ...otherDataProps}) => (
      <CollectionItem key = {id} {...otherDataProps} title = {title}/>
    ));
  
  return(
    <div className="collection-preview">
      <div className="title">
        {title}
      </div>
      <div className="preview">
        {mapMithUseItems}
      </div>
    </div>
  )
};

export default CollectionPreview;