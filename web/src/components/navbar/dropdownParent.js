import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';

const DropdownParent = ({ title, children }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [activeItem, setActiveItem] = useState();

    useEffect(() => {
        setActiveItem(children.props.items.find(item => item.slug.current === location.pathname.split("/").pop()))
    }
        , []);

    // check if an active link is included in a given dropdown
    let activeDropdown
    if (activeItem) {
        activeDropdown = true
    }

    // handlers
    const handleMouseEnter = () => {
        setOpenDropdown(true)
    }
    const handleMouseLeave = () => {
        setOpenDropdown(false)
    }

    return (
        <li
            className={activeDropdown ? `${styles.nav_item_active} ${styles.nav_item}` : styles.nav_item}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span>{title}</span>
            {openDropdown && children}
        </li >)
}

export default DropdownParent;

