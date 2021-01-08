import React from "react";
import styles from './toggler.module.css'
const Toggler = ({ handleShowNav, navIsShown }) => {
    // console.log(click);
    return (
        <button className={styles.button} onClick={handleShowNav}>
            <div className={navIsShown ? `${styles.line1} ${styles.line}` : styles.line} />
            <div className={navIsShown ? `${styles.line2} ${styles.line}` : styles.line} />
            <div className={navIsShown ? `${styles.line3} ${styles.line}` : styles.line} />
        </button>
    );
};

export default Toggler;