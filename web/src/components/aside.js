import { Link } from 'gatsby';
import React from 'react';
import Navbar from './navbar/navbar'
import logo_blue from '../images/logo_blue.png'
import logo_orange from '../images/logo_orange.png'
import logo_green from '../images/logo_green.png'
import logo_red from '../images/logo_red.png'
import styles from './aside.module.css'

const Aside = ({ subSiteTitle }) => {
    let source
    let aside_border_right
    let className
    switch (subSiteTitle) {
        case 'Rodziny zastępcze':
            source = logo_blue;
            className = styles.logo_blue;
            aside_border_right = styles.blue
            break;
        case 'Osoby z niepełnosprawnością':
            source = logo_green;
            className = styles.logo_green;
            aside_border_right = styles.green
            break;
        case 'Pomoc instytucjonalna':
            source = logo_orange;
            className = styles.logo_orange;
            aside_border_right = styles.orange
            break;
        default:
            source = logo_red;
            className = styles.logo_red;
            aside_border_right = styles.red
    }
    return (
        <aside className={aside_border_right}>
            <p className={styles.aside_header}>Obszary naszej działalności:</p>
            <nav className={styles.navbar}>
                <Link className={styles.nav_item} to='/rodziny-zastepcze'>Rodziny zastępcze</Link>
                <Link className={styles.nav_item} to='/osoby-niepelnosprawne'>Osoby z niepełnosprawnością</Link>
                <Link className={styles.nav_item} to='/pomoc-instytucjonalna'>Pomoc instytucjonalna</Link>
            </nav>
            <div className={styles.logo_container}><img className={className} src={source} alt="Część logo odpowiadająca rodzajowi aktywności PCPR" /></div>
        </aside>
    )
};

export default Aside;