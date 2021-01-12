import './general-button.styles.scss';

const GeneralButton = ({children, typeBtn = '', ...otherProps}) => {
  return(
    <button className = {`general-button ${typeBtn}`} {...otherProps}>
      {children}
    </button>
  )
};

export default GeneralButton;