import React from "react";
import styles from './toggler.module.css'
const Toggler = ({ click, open }) => {
    // console.log(click);
    return (
        <button className={styles.button} onClick={click}>
            <div className={open ? `${styles.line1} ${styles.line}` : styles.line} />
            <div className={open ? `${styles.line2} ${styles.line}` : styles.line} />
            <div className={open ? `${styles.line3} ${styles.line}` : styles.line} />
        </button>
    );
};

export default Toggler;