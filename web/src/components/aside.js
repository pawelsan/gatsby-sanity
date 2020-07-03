import { Link } from 'gatsby';
import React from 'react';
import Navbar from './navbar/navbar'

import styles from './aside.module.css'

const Aside = ({ subSiteTitle }) => {
    return (
        <aside>
            {/* <p className={styles.aside_header}>Obszary naszej działalności:</p> */}
            <nav className={styles.navbar}>
                <Link className={styles.nav_item} to='/rodziny-zastepcze'>Rodziny zastępcze</Link>
                <Link className={styles.nav_item} to='/osoby-niepelnosprawne'>Osoby z niepełnosprawnością</Link>
                <Link className={styles.nav_item} to='/pomoc-instytucjonalna'>Pomoc instytucjonalna</Link>
            </nav>
            {/* <div className={styles.logo_container}><img className={className} src={source} alt="Część logo odpowiadająca rodzajowi aktywności PCPR" /></div> */}
        </aside>
    )
};

export default Aside;