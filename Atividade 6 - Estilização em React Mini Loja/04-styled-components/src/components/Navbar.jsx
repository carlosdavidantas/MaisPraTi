import styled from 'styled-components';
import { FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.navbarBg};
  box-shadow: ${props => props.theme.navbarShadow};
  z-index: 1000;
  padding: 0 1rem;
`;

const NavbarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Logo = styled.div`
  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme.primaryDark};
    margin: 0;
  }
`;

const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: ${props => props.theme.mutedText};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: background-color 200ms ease;
  
  &:hover {
    background-color: ${props => props.theme.hoverBg};
  }
`;

const Cart = styled.div`
  position: relative;
  font-size: 1.25rem;
  color: ${props => props.theme.mutedText};
`;

const CartBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const Navbar = ({ cartCount, toggleTheme, isDarkMode }) => {
  return (
    <Nav>
      <NavbarContainer>
        <Logo>
          <h1>LojaTech</h1>
        </Logo>
        <NavbarActions>
          <ThemeToggle 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Alternar para modo claro" : "Alternar para modo escuro"}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <Cart>
            <FaShoppingCart />
            {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
          </Cart>
        </NavbarActions>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;