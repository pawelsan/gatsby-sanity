import React, { useState } from 'react'
import DropdownItems from './dropdown-items';

import styles from './navbar.module.css'

const Dropdown = ({ items, text, color, primary }) => {

    const [openDropdown, setOpenDropdown] = useState(false);

    const activeItem = items.find(item => item.to === location.pathname);

    const activeItemInNestedDropdown = items
        .filter(item => item.dropdown === true)
        .find(item => item.dropdownItems
            .find(item => item.to === location.pathname))

    let activeDropdown

    let dropdownColor

    // check if an active link is included in a given dropdown
    if (activeItem) {
        activeDropdown = true
        dropdownColor = activeItem.color
        // check if an active link is included in a given dropdown's nested dropdown
    } else if (activeItemInNestedDropdown) {
        activeDropdown = true
        dropdownColor = activeItemInNestedDropdown.color
    } else {
        activeDropdown = false
        dropdownColor = color
    }

    return (
        <div
            className={activeDropdown ? `${styles.nav_item} ${styles.active} ${styles[`active_item_${dropdownColor}`]}` : `${styles.nav_item} ${styles[`nav_item_${dropdownColor}`]}`}
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}>

            <div>{text}</div>

            {/* <div className={openDropdown ? `${styles.arrow} ${styles.arrow_up}` : styles.arrow}></div> */}

            {openDropdown && <DropdownItems items={items} primary={primary} />}
        </div>
    );
}

export default Dropdown;