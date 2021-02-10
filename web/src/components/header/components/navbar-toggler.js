import React from "react";
import styles from "../styles/header.module.css";
const NavbarToggler = ({ handleShowNav, navIsShown }) => {

  return (
    <button className={styles.toggler} onClick={handleShowNav}>
      <div className={navIsShown ? `${styles.toggler_line1} ${styles.toggler_line}` : styles.toggler_line} />
      <div className={navIsShown ? `${styles.toggler_line2} ${styles.toggler_line}` : styles.toggler_line} />
      <div className={navIsShown ? `${styles.toggler_line3} ${styles.toggler_line}` : styles.toggler_line} />
    </button>
  );
};

export default NavbarToggler;
