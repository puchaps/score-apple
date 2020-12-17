import './catalog-item.styles.scss';

const CatalogItem = ({title, imageUrl, size}) => {
  const styleBg = {
    backgroundImage: `url(${imageUrl})`
  };
  console.log(size)
  return(
    <div className={`catalog-item ${size ? size : ''}`}>
      <div className="background-img" style = {styleBg}/>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
};

export default CatalogItem;