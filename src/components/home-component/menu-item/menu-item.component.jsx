import './menu-item.styles.scss';

import { withRouter } from 'react-router';

const MenuItem = ({title, history}) => {
  return(
    <div className="menu-item">
      <div className="btn">
        <button onClick = {() => history.push(`/shop/${title}`)}>{title}</button>
      </div>
    </div>
  )
};

export default withRouter(MenuItem);