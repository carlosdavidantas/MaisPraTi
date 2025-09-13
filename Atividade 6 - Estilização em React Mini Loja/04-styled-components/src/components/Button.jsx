import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius};
  font-weight: 500;
  cursor: pointer;
  transition: all 200ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 0.875rem;
  min-height: 40px;
  ${props => props.className?.includes('mt-auto') ? 'margin-top: auto;' : ''}
  
  /* Solid variant */
  ${props => props.variant === 'solid' && `
    background-color: ${props.theme.primaryDark};
    color: white;
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.primaryHoverDark};
      transform: translateY(-0.125rem);
    }
  `}
  
  /* Outline variant */
  ${props => props.variant === 'outline' && `
    background-color: transparent;
    color: ${props.theme.primaryDark};
    border: 1px solid ${props.theme.primaryDark};
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.primaryDark};
      color: white;
      transform: translateY(-0.125rem);
    }
  `}
  
  /* Ghost variant */
  ${props => props.variant === 'ghost' && `
    background-color: transparent;
    color: ${props.theme.primaryDark};
    border: 1px solid transparent;
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.hoverBg};
      transform: translateY(-0.125rem);
    }
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  ${props => props.loading && `
    cursor: wait;
    position: relative;
  `}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.focusRing};
  }
`;

const Spinner = styled.span`
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Button = ({ 
  children, 
  variant = 'solid', 
  onClick, 
  disabled = false, 
  loading = false,
  className = '',
  ...props 
}) => {
  return (
    <StyledButton 
      variant={variant}
      onClick={onClick} 
      disabled={disabled || loading}
      loading={loading}
      className={className}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </StyledButton>
  );
};

export default Button;