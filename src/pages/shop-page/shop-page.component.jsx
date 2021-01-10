import React from 'react';

import './shop-page.styles.scss';

import { SHOP_DATA } from '../../data/shop-page-data/shop.data';

import CollectionPreview from '../../components/shop-component/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  state = {
    products: SHOP_DATA
  };

  render() {
    const{products} = this.state;

    const mapWithUseProducts = products.map( ({ id, ...otherDataProps}) => (
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
  }
};

export default ShopPage;