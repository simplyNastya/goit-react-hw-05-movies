// import PropTypes from 'prop-types';

import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.headerSection}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a
              href="#"
              className={`${styles.navLink} ${styles.navLinkCurrent}`}
            >
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Movies
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
