import React, { useState, useCallback } from 'react';
import Checkbox from "./checkbox";

const LargeFontToggle = () => {
    if (typeof window === 'undefined') {
        return null;
    }
    let font
    if (localStorage) {
        font = localStorage.getItem("preferred-font")
    }

    const [checked, setChecked] = useState(font === 'large');

    const onChange = useCallback(
        e => {
            const isChecked = e.target.checked;
            setChecked(isChecked);
            window.__setPreferredFont(isChecked ? 'large' : 'normal');
        },
        [setChecked]
    );

    return <Checkbox checkmark={"fontSize"} checked={checked} onChange={onChange} />;
};

export default LargeFontToggle;