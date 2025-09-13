import styles from './ProductCard.module.css';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  const renderRating = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img 
          src={product.image} 
          alt={product.title} 
          loading="lazy"
        />
        {product.tag && <span className={`${styles.tag} ${styles[product.tag.toLowerCase()]}`}>{product.tag}</span>}
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <div className={styles.productRating}>{renderRating(product.rating)}</div>
        <div className={styles.productPrice}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.price)}
        </div>
        <Button 
          variant="solid" 
          onClick={() => onAddToCart(product)}
          className={styles.addToCartButton}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;