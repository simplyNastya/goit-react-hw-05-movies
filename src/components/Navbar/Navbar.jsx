// import PropTypes from 'prop-types';
import NavbarMenuItems from './NavbarMenuItems/NavbarMenuItems';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.headerSection}>
      <nav className={styles.nav}>
        <NavbarMenuItems />
      </nav>
    </header>
  );
};

export default Navbar;
