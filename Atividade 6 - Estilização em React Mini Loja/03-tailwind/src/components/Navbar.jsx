import { FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ cartCount, toggleTheme, isDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-900/50 z-[1000] px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[60px]">
        <div className="logo">
          <h1 className="text-xl font-bold text-blue-500 dark:text-blue-400 m-0">LojaTech</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="bg-none border-none cursor-pointer text-xl text-gray-800 dark:text-gray-200 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-slate-700" 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Alternar para modo claro" : "Alternar para modo escuro"}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className="relative text-xl text-gray-800 dark:text-gray-200">
            <FaShoppingCart />
            {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{cartCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;