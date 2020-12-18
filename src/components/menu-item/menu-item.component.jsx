import './menu-item.styles.scss';

const MenuItem = ({title}) => {
  return(
    <div className="menu-item">
      <div className="btn">
        <button>{title}</button>
      </div>
    </div>
  )
};

export default MenuItem;