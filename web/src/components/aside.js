import { Link } from 'gatsby';
import React from 'react';
import Navbar from './navbar/navbar'

import styles from './aside.module.css'

const Aside = () => (
    <aside>
        <nav className={styles.navbar}>
            <Link to='/rodziny-zastepcze'>Rodziny zastępcze</Link>
            <Link to='/osoby-niepelnosprawne'>Osoby z niepełnosprawnością</Link>
            <Link to='/pomoc-instytucjonalna'>Pomoc instytucjonalna</Link>
        </nav>
    </aside>
);

export default Aside;