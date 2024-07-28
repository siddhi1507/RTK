
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src="/images/ss.png" alt="Logo" style={{ width: 50, height: 50 }} />
        <svg width="4" height="4" viewBox="0 0 4 4">
        </svg>
      </div>
      <nav className={styles.nav} style={{ float: 'right' }}>
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#about">About Us</a>
      </nav>
    </header>
  );
};

export default Header;