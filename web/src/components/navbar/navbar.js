import { Link } from 'gatsby'
import React from 'react';
import Dropdown from './dropdown';
import styles from './navbar.module.css'

const Navbar = ({ openNav, subSiteTitle }) => {

    return (
        <nav className={openNav ? `${styles.navbar} ${styles.open}` : styles.navbar}>
            <Link className={styles.nav_item} to='/'><div>Strona</div><div>główna</div></Link>
            <Dropdown subSiteTitle={subSiteTitle} />
            <Link className={styles.nav_item} to='/deklaracja/'><div>Deklaracja</div><div>dostępności</div></Link>
            <Link className={styles.nav_item} to='/dokumenty/'><div>Dokumenty</div><div>do pobrania</div></Link>
            <Link className={styles.nav_item} to='/kontakt/'><div>Dane</div><div>kontaktowe</div></Link>
        </nav>
    )
};


export default Navbar;