import React from "react";
import styles from './toggler.module.css'
const Toggler = ({ click, asideOpen }) => {
    // console.log(click);
    return (
        <button className={styles.button} onClick={() => click()}>
            <div className={asideOpen ? `${styles.line1} ${styles.line}` : styles.line} />
            <div className={asideOpen ? `${styles.line2} ${styles.line}` : styles.line} />
            <div className={asideOpen ? `${styles.line3} ${styles.line}` : styles.line} />
        </button>
    );
};

export default Toggler;