import React, { useState, useEffect, useCallback } from 'react';
import Checkbox from "./checkbox";

const DarkModeToggle = () => {
    if (typeof window === 'undefined') {
        return null;
    }
    let theme
    if (localStorage) {
        theme = localStorage.getItem("preferred-theme")
    }

    const [checked, setChecked] = useState(theme === 'dark');

    const onChange = useCallback(
        e => {
            const isChecked = e.target.checked;
            setChecked(isChecked);
            window.__setPreferredTheme(isChecked ? 'dark' : 'light');
        },
        [setChecked]
    );

    return <Checkbox checked={checked} onChange={onChange} />;
};

export default DarkModeToggle;