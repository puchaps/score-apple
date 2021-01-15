import { connect } from 'react-redux';

import './collection-choosed.styles.scss';

import { selectorGetCoosedCollection } from '../../../redux/reducers/shop-reducer/selectors/shop.selectors';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionChoosed = ({collections}) => {
  const{items} = collections;

  const showChoosedCollection = items.map( (item) => (
    <CollectionItem key = {item.id} item = {item} title = {collections.title}/>
  ));
  
  return (
    <div className="collection-choosed">
      <h2 className="collection-title">
        {collections.title}
      </h2>
      <div className="collection">
        {showChoosedCollection}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectorGetCoosedCollection(ownProps.match.params.collectionChoosed)(state)
});

export default connect(
  mapStateToProps
)(CollectionChoosed);