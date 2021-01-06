import './general-button.styles.scss';

const GeneralButton = ({children, ...otherProps}) => {
  return(
    <button className="general-button">
      {children}
    </button>
  )
};

export default GeneralButton;