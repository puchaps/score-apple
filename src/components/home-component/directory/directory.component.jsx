import { connect } from 'react-redux';

import './directory.styles.scss';

import { selectorCollections } from '../../../redux/reducers/shop-reducer/selectors/shop.selectors';

import CatalogItem from '../catalog-item/catalog-item.component';

const Directory = ({collections, myRef}) => {
  const getComponentFromCatalog = collections.map(item => {
    return <CatalogItem key = {item.id} {...item}/>
  });

  return(
    <div className="directory">
      <div className="directory-slider" ref = {myRef}>
        {getComponentFromCatalog}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  collections: selectorCollections(state)
})

export default connect(
  mapStateToProps
)(Directory);