import './ProductCard.css';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  const renderRating = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.title} 
          loading="lazy"
        />
        {product.tag && <span className={`tag ${product.tag.toLowerCase()}`}>{product.tag}</span>}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">{renderRating(product.rating)}</div>
        <div className="product-price">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.price)}
        </div>
        <Button 
          variant="solid" 
          onClick={() => onAddToCart(product)}
          className="add-to-cart-button"
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;