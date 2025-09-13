import './Skeleton.css';

const Skeleton = ({ type = 'product', className = '' }) => {
  const skeletonClass = `skeleton skeleton-${type} ${className}`;
  
  return (
    <div className={skeletonClass}>
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-rating"></div>
        <div className="skeleton-price"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default Skeleton;