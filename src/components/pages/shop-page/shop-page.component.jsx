import React from 'react';

import './shop-page.styles.scss';

import { DATA_SHOP_PAGE } from './shop-page.data';

import ProductItem from '../../product-item/product-item.component';

class ShopPage extends React.Component {
  state = {
    products: DATA_SHOP_PAGE
  };

  render() {
    const{products} = this.state;

    const mapWithUseProducts = products.map( ({ id, ...otherDataProps}) => {
      return(
        <ProductItem key = {id} {...otherDataProps}/>
      )
    });

    return(
      <div className="shop-page">
        <div className="title">
          <h1>All catalog</h1>
        </div>
        <div className="all-products">
          {mapWithUseProducts}
        </div>
      </div>
    )
  }
};

export default ShopPage;