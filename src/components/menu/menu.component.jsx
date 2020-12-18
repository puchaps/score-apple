
import './menu.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const Menu = ({catalog}) => {
  const getComponnetFromCatalog = catalog.map(({title, id}) => {
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

export default Menu;
