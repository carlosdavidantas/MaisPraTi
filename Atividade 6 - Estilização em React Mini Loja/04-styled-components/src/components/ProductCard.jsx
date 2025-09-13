import styled from 'styled-components';
import Button from './Button';

const ProductCardContainer = styled.div`
  background-color: ${props => props.theme.cardBg};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  box-shadow: ${props => props.theme.cardShadow};
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: ${props => props.theme.cardHoverShadow};
  }
`;

const ProductImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 aspect ratio */
  background-color: ${props => props.theme.imagePlaceholderBg};
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Tag = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadiusSm};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  
  &.novo {
    background-color: ${props => props.theme.tagNewBg};
    color: ${props => props.theme.tagNewText};
  }
  
  &.promo {
    background-color: ${props => props.theme.tagPromoBg};
    color: ${props => props.theme.tagPromoText};
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  height: 2.5rem; /* 2 lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${props => props.theme.text};
`;

const ProductRating = styled.div`
  color: ${props => props.theme.rating};
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

const ProductPrice = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${props => props.theme.price};
`;


const ProductCard = ({ product, onAddToCart }) => {
  const renderRating = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <ProductCardContainer>
      <ProductImage>
        <img 
          src={product.image} 
          alt={product.title} 
          loading="lazy"
        />
        {product.tag && <Tag className={product.tag.toLowerCase()}>{product.tag}</Tag>}
      </ProductImage>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductRating>{renderRating(product.rating)}</ProductRating>
        <ProductPrice>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.price)}
        </ProductPrice>
        <Button 
            variant="solid" 
            onClick={() => onAddToCart(product)}
            className="mt-auto"
          >
            Adicionar
          </Button>
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;