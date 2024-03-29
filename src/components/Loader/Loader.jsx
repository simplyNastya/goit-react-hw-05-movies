import { RotatingLines } from 'react-loader-spinner';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
        strokeColor="rgb(255, 0, 0)"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
