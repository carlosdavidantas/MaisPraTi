import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  const renderRating = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden transition-transform duration-200 ease-in-out shadow-sm dark:shadow-slate-900/30 flex flex-col h-full hover:shadow-md dark:hover:shadow-slate-900/40 hover:-translate-y-1">
      <div className="relative w-full pt-[100%] bg-gray-100 dark:bg-slate-600">
        <img 
          src={product.image} 
          alt={product.title} 
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {product.tag && (
          <span className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold uppercase ${
            product.tag === 'Novo' 
              ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-emerald-900' 
              : 'bg-red-500 text-white dark:bg-red-400 dark:text-red-900'
          }`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-base font-normal text-gray-800 dark:text-gray-200 mb-2 h-10 line-clamp-2">
          {product.title}
        </h3>
        <div className="text-yellow-500 dark:text-yellow-400 mb-2 text-sm">
          {renderRating(product.rating)}
        </div>
        <div className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.price)}
        </div>
        <Button 
          variant="solid" 
          onClick={() => onAddToCart(product)}
          className="mt-auto"
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;