import { Link } from 'gatsby';
import React from 'react';
import Dropdown from './dropdown'
import styles from './dropdown-menu.module.css'

const DropdownItems = ({ items, primary }) => {
    console.log(styles[`drop_item_red`])
    return (
        <div className={primary ? `${styles.dropdown} ${styles.primary_dropdown}` : styles.dropdown}>
            {items.map((item, index) =>
                item.dropdown ? <Dropdown key={index} text={item.text} items={item.dropdownItems} primary={false} /> :
                    <Link key={index} className={`${styles.drop_item} ${styles[`drop_item_${item.color}`]}`} to={item.to}>{item.text}</Link>
            )}

            {/* <Link className={styles.drop_item} to></Link>
            <Link className={styles.drop_item} to></Link>
            <Link className={styles.drop_item} to></Link> */}
        </div>
    )
};

export default DropdownItems;