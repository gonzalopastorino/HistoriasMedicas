import styles from './ErrorPage.module.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.title}>404 Error</h1>
      <p className={styles.zoomArea}>
        <b>Ooops!</b> Es posible que haya escrito mal la dirección o que la página se haya movido.
      </p>
      <section className={styles.errorContainer}>
        <span className={styles.errorNumber}>4</span>
        <span className={styles.errorNumber}>
          <span className={styles.screenReaderText}>0</span>
        </span>
        <span className={styles.errorNumber}>4</span>
      </section>
      <div className={styles.linkContainer}>
      <Link to="/home" className={styles.moreLink}>
          Regresar a casa
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

