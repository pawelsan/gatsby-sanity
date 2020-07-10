import React, { useState } from 'react'
import DropdownMenu from './dropdown-menu';

import styles from './navbar.module.css'

const Dropdown = ({ subSiteTitle }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    let active
    if (subSiteTitle === "Informacje ogólne" || subSiteTitle === "Rodziny zastępcze" || subSiteTitle === "Osoby z niepełnosprawnością" || subSiteTitle === "Pomoc instytucjonalna") {
        active = true

    } else {
        active = false
    }
    return (
        <div className={styles.nav_item} onClick={() => setOpenDropdown(!openDropdown)}>
            <div className={
                active && subSiteTitle === "Rodziny zastępcze" ? `${styles.nav_item_dropdown} ${styles.active_blue}` :
                    active && subSiteTitle === "Osoby z niepełnosprawnością" ? `${styles.nav_item_dropdown} ${styles.active_green}` :
                        active && subSiteTitle === "Pomoc instytucjonalna" ? `${styles.nav_item_dropdown} ${styles.active_orange}` :
                            active ? `${styles.nav_item_dropdown} ${styles.active}` : styles.nav_item_dropdown
            }>
                <div>
                    <div>Nasza</div>
                    <div>praca</div>
                </div>
                <div className={openDropdown && active ? `${styles.arrow} ${styles.arrow_up} ${styles.arrow_active}` : openDropdown ? `${styles.arrow} ${styles.arrow_up}` : active ? `${styles.arrow_active} ${styles.arrow} ` : styles.arrow}></div>
            </div>
            {openDropdown && <DropdownMenu />}
        </div>
    );
}

export default Dropdown;