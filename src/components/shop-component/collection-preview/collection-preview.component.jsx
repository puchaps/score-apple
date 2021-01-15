import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items, history, match}) => {
  const mapMithUseItems = items.filter( (item, index) => index < 4)
    .map( (item) => (
      <CollectionItem key = {item.id} item = {item} title = {title}/>
    ));
  
  return(
    <div className="collection-preview">
      <div className="title" onClick = {() => history.push(`${match.path}/${title}`)}>
        {title}
      </div>
      <div className="preview">
        {mapMithUseItems}
      </div>
    </div>
  )
};

export default withRouter(CollectionPreview);