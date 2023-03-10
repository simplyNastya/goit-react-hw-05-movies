// import PropTypes from 'prop-types';
import NavbarMenuItems from './NavbarMenuItems/NavbarMenuItems';
import styles from './navbar.module.css';

const Navbar = ({ menuItems }) => {
  return (
    <header className={styles.headerSection}>
      <nav className={styles.nav}>
        <NavbarMenuItems menuItems={menuItems} />
      </nav>
    </header>
  );
};

export default Navbar;
