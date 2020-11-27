import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react';
import { dropdownItemsForAbout, dropdownItemsForDocuments, dropdownItemsForContact } from './dropdownItems'
// import Dropdown from './dropdown';
import DropdownMenu from './dropdown-menu';
import styles from './navbar.module.css'

const Navbar = ({ openNav }) => {

    const Dropdown = ({ items, text }) => {

        const [openDropdown, setOpenDropdown] = useState(false);
        const [activeItem, setActiveItem] = useState();
        const [activeItemInNestedDropdown, setActiveItemInNestedDropdown] = useState();

        useEffect(() => {
            setActiveItem(items.find(item => item.to === location.pathname));
            setActiveItemInNestedDropdown(
                items
                    .filter(item => item.to === null)
                    .find(item => item.subItems
                        .find(subItem => subItem.to === location.pathname)))
        }

            , []);

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
            dropdownColor = null
        }

        return (
            <div
                className={activeDropdown ? `${styles.nav_item} ${styles.active} ${styles[`active_item_${dropdownColor}`]}` : `${styles.nav_item} ${styles[`nav_item_${dropdownColor}`]}`}
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
            >
                <div>{text}</div>
                {openDropdown && <DropdownMenu items={items} />}
            </div>
        );
    }

    return (
        <nav className={openNav ? `${styles.navbar} ${styles.open}` : styles.navbar}>
            <Link className={styles.nav_item} activeClassName={`${styles.active} ${styles.active_item_red}`} to='/'><div>Aktualności</div></Link>
            <Link className={styles.nav_item} activeClassName={`${styles.active} ${styles.active_item_red}`} to='/o-nas'><div>O nas</div></Link>
            <Dropdown items={dropdownItemsForAbout} text={'Nasza praca'} />
            <Dropdown items={dropdownItemsForDocuments} text={'Dokumenty'} />
            <Dropdown items={dropdownItemsForContact} text={'Kontakt'} />
        </nav>
    )
};


export default Navbar;