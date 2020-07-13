import { Link } from 'gatsby'
import React from 'react';
import Dropdown from './dropdown';
import styles from './navbar.module.css'

const Navbar = ({ openNav, subSiteTitle }) => {

    const dropdownItems = [
        { to: '/o-nas/', text: 'Informacje ogólne' },
        {
            dropdown: true, text: 'Osoby z niepełnosprawnością', dropdownItems: [
                { to: '/osoby-z-niepelnosprawnoscia/rehabilitacja-spoleczna/', text: 'Rehabilitacja spoleczna' },
                { to: '/osoby-z-niepelnosprawnoscia/aktywny-samorzad/', text: 'Aktywny samorząd' },
            ]
        },
        {
            dropdown: true, text: 'Pomoc instytucjonalna', dropdownItems: [
                { to: '/pomoc-instytucjonalna/domy-pomocy-spolecznej/', text: 'Domy Pomocy Społecznej' },
                { to: '/pomoc-instytucjonalna/srodowiskowe-domy-samopomocy/', text: 'Środowiskowe Domy Samopomocy' },
                { to: '/pomoc-instytucjonalna/warsztaty-terapii-zajeciowej/', text: 'Warsztaty Terapii Zajęciowej' },
            ]
        },
        { to: '/cudzoziemcy', text: 'Cudzoziemcy' }
        // { to: '/rodziny-zastepcze', text: 'Rodziny zastępcze' },
        // { to: '/osoby-niepelnosprawne', text: 'Osoby z niepełnosprawnością' },
        // { to: '/pomoc-instytucjonalna', text: 'Pomoc instytucjonalna' }
    ]

    return (
        <nav className={openNav ? `${styles.navbar} ${styles.open}` : styles.navbar}>
            <Link className={styles.nav_item} to='/'><div>Strona</div><div>główna</div></Link>
            <Dropdown subSiteTitle={subSiteTitle} items={dropdownItems} text={'Nasza praca'} primary={true} />
            <Link className={styles.nav_item} to='/deklaracja/'><div>Deklaracja</div><div>dostępności</div></Link>
            <Link className={styles.nav_item} to='/dokumenty/'><div>Dokumenty</div><div>do pobrania</div></Link>
            <Link className={styles.nav_item} to='/kontakt/'><div>Dane</div><div>kontaktowe</div></Link>
        </nav>
    )
};


export default Navbar;