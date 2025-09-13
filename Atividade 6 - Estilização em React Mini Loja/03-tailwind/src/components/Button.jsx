const Button = ({ 
  children, 
  variant = 'solid', 
  onClick, 
  disabled = false, 
  loading = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium cursor-pointer transition-all duration-200 inline-flex items-center justify-center border-none text-sm min-h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500/50";
  
  const variantClasses = {
    solid: "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300 dark:text-blue-900 hover:-translate-y-0.5 disabled:hover:transform-none",
    outline: "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-blue-900 hover:-translate-y-0.5 disabled:hover:transform-none",
    ghost: "bg-transparent text-blue-500 border border-transparent hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-slate-600 hover:-translate-y-0.5 disabled:hover:transform-none"
  };
  
  const disabledClasses = "opacity-60 cursor-not-allowed transform-none";
  const loadingClasses = "cursor-wait relative";

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    disabled ? disabledClasses : '',
    loading ? loadingClasses : '',
    className
  ].join(' ');

  return (
    <button 
      className={buttonClasses} 
      onClick={onClick} 
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;