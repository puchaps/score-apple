import { connect } from 'react-redux';

import './shop-page.styles.scss';

import { selectorCollections } from '../../redux/reducers/shop-reducer/selectors/shop.selectors';

import CollectionPreview from '../../components/shop-component/collection-preview/collection-preview.component';

const ShopPage = ({collections}) => {
  const mapWithUseProducts = collections.map( ({ id, ...otherDataProps}) => (
    <CollectionPreview key = {id} {...otherDataProps}/>
  ));

  return(
    <div className="shop-page">
      <div className="title">
        <h1>ALL CATALOG</h1>
      </div>
      <div className="all-products">
        {mapWithUseProducts}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  collections: selectorCollections(state)
})

export default connect(
  mapStateToProps
)(ShopPage);