import './catalog-item.styles.scss';

const CatalogItem = ({title, imageUrl, size}) => {
  const styleBg = {
    backgroundImage: `url(${imageUrl})`
  };
  return(
    <div className={`catalog-item ${size ? size : ''}`}>
      <div className="background-img" style = {styleBg}/>
      <div className="content">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  )
};

export default CatalogItem;