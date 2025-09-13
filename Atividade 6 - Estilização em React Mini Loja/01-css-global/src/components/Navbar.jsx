import { FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartCount, toggleTheme, isDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>LojaTech</h1>
        </div>
        <div className="navbar-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Alternar para modo claro" : "Alternar para modo escuro"}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className="cart">
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;