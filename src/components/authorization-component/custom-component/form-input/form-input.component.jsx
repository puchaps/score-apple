import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => {
  return(
    <div className="login-from">
      <input 
        className="login-input"
        onChange = {handleChange}
        {...otherProps}
      />
      {
        label ? 
          (<label className = {`${otherProps.value.length ? 'shrink' : ''} login-input-label`}>
            {label}
          </label>)
        : null
      }
    </div>
  )
};

export default FormInput;