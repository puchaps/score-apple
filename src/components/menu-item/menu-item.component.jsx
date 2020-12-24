import './menu-item.styles.scss';

import { withRouter } from 'react-router';

const MenuItem = ({title, history, match}) => {
  return(
    <div className="menu-item">
      <div className="btn">
        <button onClick = {() => history.push(`${match.url}${title}`)}>{title}</button>
      </div>
    </div>
  )
};

export default withRouter(MenuItem);