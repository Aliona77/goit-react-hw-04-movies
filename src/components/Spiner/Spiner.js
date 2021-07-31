import styles from './Spiner.module.css';
import Loader from 'react-loader-spinner';

export default function Spiner() {
  return (
    <div className={styles.div}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={0}
      />
    </div>
  );
}
