import { Link } from 'gatsby';
import React from 'react';
import styles from './navbar.module.css'

const DropdownMenu = ({ items }) => {
    console.log(items)
    const dropdownItems = items.map((item, index) =>
        <Link key={index}
            // className={`${styles.dropdown_item} ${styles[`dropdown_item_${item.color}`]}`}
            // activeClassName={`${styles.active} ${styles[`active_item_${item.color}`]}`}
            to={`o-nas/${item.slug.current}`}>{item.pageName}</Link>
    )
    return (
        <div className={styles.dropdown}>
            {dropdownItems}
            {/* {items.map((item, index) =>
                !item.to
                    ?
                    <div>
                        <span>{item.text}</span>
                        {item.subItems.map((subItem, index) =>
                            <Link key={index}
                                className={`${styles.dropdown_item} ${styles[`dropdown_item_${subItem.color}`]}`}
                                activeClassName={`${styles.active} ${styles[`active_item_${subItem.color}`]}`}
                                to={subItem.to}>{subItem.text}</Link>)}
                    </div>
                    :
                    <Link key={index}
                        className={`${styles.dropdown_item} ${styles[`dropdown_item_${item.color}`]}`}
                        activeClassName={`${styles.active} ${styles[`active_item_${item.color}`]}`}
                        to={item.to}>{item.text}</Link>
            )} */}
        </div>
    )
};

export default DropdownMenu;