import { withRouter } from 'react-router';

import './catalog-item.styles.scss';

const CatalogItem = ({title, imageUrl, size, history}) => {
  const styleBg = {
    backgroundImage: `url(${imageUrl})`
  };

  return(
    <div 
      className={`catalog-item ${size ? size : ''}`}
      onClick = {() => history.push(`/shop/${title}`)}
      >
      <div className="background-img" style = {styleBg}/>
      <div className="content">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  )
};

export default withRouter(CatalogItem);