import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Skeleton from './components/Skeleton';
import { products } from './data';
import { theme } from './theme';

const AppContainer = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.text};
`;

const MainContent = styled.main`
  padding-top: 80px; /* Space for fixed navbar */
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  
  /* Responsive grid */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

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

  // Set initial body background based on saved theme
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#0f172a' : '#f8fafc';
    document.body.style.color = isDarkMode ? '#e2e8f0' : '#1f2937';
  }, []);

  // Save theme preference to localStorage and apply to body
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.style.backgroundColor = isDarkMode ? '#0f172a' : '#f8fafc';
    document.body.style.color = isDarkMode ? '#e2e8f0' : '#1f2937';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    console.log(`Added to cart: ${product.title}`);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <AppContainer>
        <Navbar 
          cartCount={cartCount} 
          toggleTheme={toggleTheme} 
          isDarkMode={isDarkMode} 
        />
        
        <MainContent>
          <ProductsGrid>
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
          </ProductsGrid>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;