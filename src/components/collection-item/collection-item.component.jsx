import './collection-item.styles.scss';

const CollectionItem = ({ imageUrl, name, price }) => {
  const findWatch = (elem) => {
    return elem.includes('Watch');
  }

  const findMacBook = (elem) => {
    return elem.includes('MacBook');
  }

  let resolveWatch = findWatch(name);
  let resolveMac = findMacBook(name);

  return(
    <div className="collection-item ">
      <div 
        className = {`image ${resolveWatch ? 'watch' : ''} ${resolveMac ? 'mac' : ''}`} 
        style = {{backgroundImage: `url(${imageUrl})`}}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
    </div>
  )
};

export default CollectionItem;