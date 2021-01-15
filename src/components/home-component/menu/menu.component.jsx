import { connect } from 'react-redux';

import './menu.styles.scss';

import { selectorCollections } from '../../../redux/reducers/shop-reducer/selectors/shop.selectors';

import MenuItem from '../menu-item/menu-item.component';

const Menu = ({collections}) => {
  const getComponnetFromCatalog = collections.map(({title, id}) => {
    return <MenuItem key = {id} title = {title}/>
  });

  return(
    <menu >
      <div className="menu-main">
        {getComponnetFromCatalog}
      </div>
    </menu>
    
  )
};

const mapStateToProps = (state) => ({
  collections: selectorCollections(state)
})

export default connect(
  mapStateToProps
)(Menu);
