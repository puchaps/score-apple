import './position-item.styles.scss';

const PositionItem = ({name}) => {
  return(
    <div className="position-name">
      {name}
    </div>
  )
};

export default PositionItem;