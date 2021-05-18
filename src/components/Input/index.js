const Input = ({type, value, className, onChange, name}) => {
  return (
    <input 
      type={type}
      className={className}
      name={name}
      value={value}
      onChange={onChange} />
  );
}

export default Input;