import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'solid', 
  onClick, 
  disabled = false, 
  loading = false,
  className = '',
  ...props 
}) => {
  const buttonClass = `${styles.button} ${styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${disabled ? styles.buttonDisabled : ''} ${loading ? styles.buttonLoading : ''} ${className}`;

  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={styles.buttonSpinner}></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;