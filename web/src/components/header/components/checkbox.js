import React from 'react';
import styles from "../styles/checkbox.module.css";

const Checkbox = ({ checkmark, checked, onChange }) => {
    const textA11y = checkmark === "darkMode" ? "Przełącz wysoki kontrast" : "Zmień wielkość tekstu"
    return (
        <label
            className={styles.container}
        >
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className={styles[checkmark]}></span>
            <span className={styles.a11y}>{textA11y}</span>
        </label>
    );
}

export default Checkbox;