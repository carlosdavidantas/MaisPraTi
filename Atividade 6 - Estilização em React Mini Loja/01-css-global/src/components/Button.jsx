import './Button.css';

const Button = ({ 
  children, 
  variant = 'solid', 
  onClick, 
  disabled = false, 
  loading = false,
  className = '',
  ...props 
}) => {
  const buttonClass = `button button-${variant} ${disabled ? 'button-disabled' : ''} ${loading ? 'button-loading' : ''} ${className}`;

  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="button-spinner"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;