import './catalog-item.styles.scss';

import { withRouter } from 'react-router';

const CatalogItem = ({title, imageUrl, size, history, match}) => {
  const styleBg = {
    backgroundImage: `url(${imageUrl})`
  };

  return(
    <div 
      className={`catalog-item ${size ? size : ''}`}
      onClick = {() => history.push(`${match.url}${title}`)}
      >
      <div className="background-img" style = {styleBg}/>
      <div className="content">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  )
};

export default withRouter(CatalogItem);