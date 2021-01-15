import { Route, withRouter } from 'react-router-dom';

import './shop-page.styles.scss';

import CollectionAll from '../../components/shop-component/collections-all/collection-all.component';
import CollectionChoosed from '../../components/shop-component/collection-choosed/collection-choosed.component';

const ShopPage = ({match}) => {
  return(
    <div className="shop-page">
      <Route exact path = '/shop' component = {CollectionAll}/>
      <Route exact path = {`${match.path}/:collectionChoosed`} component = {CollectionChoosed}/>
    </div>
  )
};

export default withRouter(ShopPage);