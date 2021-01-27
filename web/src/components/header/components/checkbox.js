import React from 'react';
import styles from "../styles/checkbox.module.css";

const Checkbox = ({ checked, onChange }) => {
    return (
        <label
            className={styles.container}
        >
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className={styles.checkmark}></span>
            <span className={styles.a11y}>Przełącz wysoki kontrast</span>
        </label>
    );
}

export default Checkbox;