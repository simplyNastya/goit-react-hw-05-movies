// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './navbarMenuItems.module.css';

const NavbarMenuItems = ({ menuItems }) => {
  const elements = menuItems.map(({ id, text, link }) => {
    return (
      <li key={id} className={styles.navItem}>
        <NavLink to={link} className={styles.navLink}>
          {text}
        </NavLink>
      </li>
    );
  });
  return <ul className={styles.navList}>{elements}</ul>;
};

export default NavbarMenuItems;
