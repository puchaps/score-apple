import './general-button.styles.scss';

const GeneralButton = ({children, bgColor = '', ...otherProps}) => {
  return(
    <button className = {`general-button ${bgColor}`} {...otherProps}>
      {children}
    </button>
  )
};

export default GeneralButton;