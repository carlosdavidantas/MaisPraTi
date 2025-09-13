import styles from './Skeleton.module.css';

const Skeleton = ({ type = 'product', className = '' }) => {
  const skeletonClass = `${styles.skeleton} ${styles[`skeleton${type.charAt(0).toUpperCase() + type.slice(1)}`]} ${className}`;
  
  return (
    <div className={skeletonClass}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonRating}></div>
        <div className={styles.skeletonPrice}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
  );
};

export default Skeleton;