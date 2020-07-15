import { Link } from 'gatsby';
import React from 'react';
import Dropdown from './dropdown'
import styles from './navbar.module.css'

const DropdownMenu = ({ items, primary }) => {

    return (
        <div className={primary ? `${styles.dropdown} ${styles.primary_dropdown}` : styles.dropdown}>
            {items.map((item, index) =>
                item.dropdown ? <Dropdown key={index} text={item.text} items={item.dropdownItems} color={item.color} primary={false} /> :
                    <Link key={index} className={`${styles.nav_item} ${styles[`nav_item_${item.color}`]}`} activeClassName={`${styles.active} ${styles[`active_item_${item.color}`]}`} to={item.to}>{item.text}</Link>
            )}

            {/* <Link className={styles.drop_item} to></Link>
            <Link className={styles.drop_item} to></Link>
            <Link className={styles.drop_item} to></Link> */}
        </div>
    )
};

export default DropdownMenu;