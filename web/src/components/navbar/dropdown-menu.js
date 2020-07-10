import { Link } from 'gatsby';
import React from 'react';

import styles from './dropdown-menu.module.css'

const DropdownMenu = () => {
    const items = [
        { to: '/o-nas/', text: 'Informacje ogólne' },
        { to: '/rodziny-zastepcze', text: 'Rodziny zastępcze' },
        { to: '/osoby-niepelnosprawne', text: 'Osoby z niepełnosprawnością' },
        { to: '/pomoc-instytucjonalna', text: 'Pomoc instytucjonalna' }
    ]
    return (
        <div className={styles.dropdown}>
            {items.map((item, index) =>
                <Link key={index} className={styles.drop_item} to={item.to}>{item.text}</Link>
            )}

            {/* <Link className={styles.drop_item} to></Link>
            <Link className={styles.drop_item} to></Link>
            <Link className={styles.drop_item} to></Link> */}
        </div>
    )
};

export default DropdownMenu;