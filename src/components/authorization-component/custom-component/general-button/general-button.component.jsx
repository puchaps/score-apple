import './general-button.styles.scss';

const GeneralButton = ({children, ...otherProps}) => {
  return(
    <button className="general-button" {...otherProps}>
      {children}
    </button>
  )
};

export default GeneralButton;