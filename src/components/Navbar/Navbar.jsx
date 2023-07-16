// import PropTypes from 'prop-types';
import NavbarMenuItems from './NavbarMenuItems/NavbarMenuItems';
import styles from './navbar.module.css';
import popcorn from '../../images/popcorn.png';

const Navbar = () => {
  return (
    <header className={styles.headerSection}>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <NavbarMenuItems />
          <img src={popcorn} alt="popcorn" className={styles.img} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
