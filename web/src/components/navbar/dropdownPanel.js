import { Link } from 'gatsby';
import React from 'react';
import styles from './navbar.module.css'

const DropdownPanel = ({ items, path }) => {
    const dropdownItems = items && items.map((item, index) =>
        <Link key={index}
            className={styles.dropdown_item}
            activeClassName={styles.active}
            to={`/${path}/${item.slug.current}`}>{item.pageName}</Link>
    )
    return (
        <div className={styles.dropdown_panel}>
            <div className={styles.dropdown_container}>
                {dropdownItems}
            </div>
        </div>
    )
};

export default DropdownPanel;