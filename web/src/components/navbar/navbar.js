import React from 'react';
import styles from './navbar.module.css'

const Navbar = ({ children }) => (
    <nav className={styles.navbar}>{children}</nav>
);


export default Navbar;