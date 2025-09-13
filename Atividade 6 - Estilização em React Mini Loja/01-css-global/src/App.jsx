import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Skeleton from './components/Skeleton';
import { products } from './data';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Load theme preference from localStorage (no longer needed due to lazy initialization)

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    console.log(`Added to cart: ${product.title}`);
  };

  return (
    <div className="app">
      <Navbar 
        cartCount={cartCount} 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
      />
      
      <main className="main-content">
        <div className="products-grid">
          {isLoading ? (
            // Show skeleton loaders while loading
            Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          ) : (
            // Show actual products when loaded
            products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;