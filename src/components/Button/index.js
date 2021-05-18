const Button = ({children, className, onClick, onMouseOut}) => {
  return (
    <button 
      type='button'
      className={className}
      onClick={onClick}
      onMouseOut={onMouseOut}>
        {children}
      </button>
  );
}

export default Button;