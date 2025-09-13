import styles from './Navbar.module.css';
import { FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ cartCount, toggleTheme, isDarkMode }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <h1>LojaTech</h1>
        </div>
        <div className={styles.navbarActions}>
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Alternar para modo claro" : "Alternar para modo escuro"}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className={styles.cart}>
            <FaShoppingCart />
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;