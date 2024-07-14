import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="#" className={styles.logo}>
          Logo
        </a>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLinks}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLinks}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLinks}>
              Services
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLinks}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
