import { Link } from 'gatsby';
import React from 'react';

import styles from './dropdown.module.css'

const DropdownMenu = () => {
    return (
        <div className={styles.dropdown}>
            <Link className={styles.drop_item} to='/o-nas/'>Informacje ogólne</Link>
            <Link className={styles.drop_item} to='/rodziny-zastepcze'>Rodziny zastępcze</Link>
            <Link className={styles.drop_item} to='/osoby-niepelnosprawne'>Osoby z niepełnosprawnością</Link>
            <Link className={styles.drop_item} to='/pomoc-instytucjonalna'>Pomoc instytucjonalna</Link>
        </div>
    )
};

export default DropdownMenu;