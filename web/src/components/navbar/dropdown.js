import React, { useState } from 'react'
import DropdownMenu from './dropdown-menu';

import styles from './navbar.module.css'

const Dropdown = ({ subSiteTitle, items, text, primary }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    // let active
    // if (subSiteTitle === "Informacje ogólne" || subSiteTitle === "Rodziny zastępcze" || subSiteTitle === "Osoby z niepełnosprawnością" || subSiteTitle === "Pomoc instytucjonalna") {
    //     active = true

    // } else {
    //     active = false
    // }
    return (
        <div className={styles.nav_item} onMouseEnter={() => setOpenDropdown(true)} onMouseLeave={() => setOpenDropdown(false)}>
            <div className={
                subSiteTitle === "Piecza zastępcza" ? `${styles.nav_item_dropdown} ${styles.active_blue}` :
                    subSiteTitle === "Rehabilitacja społeczna" || subSiteTitle === "Aktywny samorząd" ? `${styles.nav_item_dropdown} ${styles.active_green}` :
                        subSiteTitle === "Domy Pomocy Społecznej" || subSiteTitle === "Środowiskowe Domy Samopomocy" || subSiteTitle === "Warsztaty Terapii Zajęciowej" ? `${styles.nav_item_dropdown} ${styles.active_orange}` :
                            subSiteTitle === "Informacje ogólne" || subSiteTitle === "Cudzoziemcy" ? `${styles.nav_item_dropdown} ${styles.active}` : styles.nav_item_dropdown
            }>
                {/* <div> */}
                <div>{text}</div>
                {/* <div>praca</div> */}
                {/* </div> */}
                <div className={openDropdown ? `${styles.arrow} ${styles.arrow_up}` : styles.arrow}></div>
            </div>
            {openDropdown && <DropdownMenu items={items} primary={primary} />}
        </div>
    );
}

export default Dropdown;