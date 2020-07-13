import { Link } from 'gatsby'
import React from 'react';
import Dropdown from './dropdown';
import styles from './navbar.module.css'

const Navbar = ({ openNav, subSiteTitle }) => {

    const dropdownItemsAbout = [
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

    const dropdownItemsDocuments = [
        { to: '/dokumenty/piecza-zastepcza/', text: 'Piecza zastępcza' },
        { to: '/dokumenty/pfron/', text: 'PFRON' },
        { to: '/dokumenty/aktywny-samorzad/', text: 'Aktywny Samorząd' },
    ]

    const dropdownItemsContact = [
        { to: '/kontakt/kontakt/', text: 'Dane kontaktowe' },
        { to: '/kontakt/deklaracja/', text: 'Deklaracja dostępności' },
        { to: '/kontakt/rodo/', text: 'RODO' },
        { to: '/kontakt/koordynatorzy/', text: 'Koordynatorzy' },
    ]

    return (
        <nav className={openNav ? `${styles.navbar} ${styles.open}` : styles.navbar}>
            <Link className={styles.nav_item} to='/'><div>Aktualności</div></Link>
            <Dropdown subSiteTitle={subSiteTitle} items={dropdownItemsAbout} text={'Nasza praca'} primary={true} />
            {/* <Link className={styles.nav_item} to='/deklaracja/'><div>Deklaracja</div><div>dostępności</div></Link> */}
            <Dropdown subSiteTitle={subSiteTitle} items={dropdownItemsDocuments} text={'Dokumenty'} primary={true} />
            <Dropdown subSiteTitle={subSiteTitle} items={dropdownItemsContact} text={'Kontakt'} primary={true} />
            {/* <Link className={styles.nav_item} to='/dokumenty/'><div>Dokumenty</div></Link>
            <Link className={styles.nav_item} to='/kontakt/'><div>Kontakt</div></Link> */}
        </nav>
    )
};


export default Navbar;