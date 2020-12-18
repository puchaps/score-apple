
import './directory.styles.scss';

import CatalogItem from '../catalog-item/catalog-item.component';

const Directory = ({catalog, myRef}) => {
    
  const getComponentFromCatalog = catalog.map(item => <CatalogItem key = {item.id} {...item}/>);

  return(
    <div className="directory">
      <div className="directory-slider" ref = {myRef}>
        {getComponentFromCatalog}
      </div>
    </div>
  )
}


export default Directory;