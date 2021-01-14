
import React from "react";
import styles from "../styles/header.module.css";

const Navbar = ({ navIsShown, children }) => {
  return (
    <nav
      className={styles.navbar}
      className={navIsShown ? styles.navbar : `${styles.navbar} ${styles.hidden}`}
    >
      <ul>
        {children}
      </ul>
    </nav>
  );
};

export default Navbar;
