import { Link } from 'gatsby'
import React, { useState } from 'react';
import Dropdown from './dropdown';
import styles from './navbar.module.css'

const Navbar = ({ openNav, subSiteTitle }) => {
    // Schemas for dropdowns' content 
    const dropdownItemsForAbout = [
        { dropdown: false, to: '/o-nas/', text: 'Informacje ogólne', color: 'red' },
        { dropdown: false, to: '/piecza-zastepcza', text: 'Piecza zastępcza', color: 'blue' },
        {
            dropdown: true, to: false, text: 'Osoby z niepełnosprawnością', color: 'green', dropdownItems: [
                { dropdown: false, to: '/osoby-z-niepelnosprawnoscia/rehabilitacja-spoleczna/', text: 'Rehabilitacja spoleczna', color: 'green' },
                { dropdown: false, to: '/osoby-z-niepelnosprawnoscia/aktywny-samorzad/', text: 'Aktywny samorząd', color: 'green' },
            ]
        },
        {
            dropdown: true, to: false, text: 'Pomoc instytucjonalna', color: 'orange', dropdownItems: [
                { dropdown: false, to: '/pomoc-instytucjonalna/domy-pomocy-spolecznej/', text: 'Domy Pomocy Społecznej', color: 'orange' },
                { dropdown: false, to: '/pomoc-instytucjonalna/srodowiskowe-domy-samopomocy/', text: 'Środowiskowe Domy Samopomocy', color: 'orange' },
                { dropdown: false, to: '/pomoc-instytucjonalna/warsztaty-terapii-zajeciowej/', text: 'Warsztaty Terapii Zajęciowej', color: 'orange' },
            ]
        },
        { dropdown: false, to: '/cudzoziemcy', text: 'Cudzoziemcy', color: 'red' }
    ]

    const dropdownItemsForDocuments = [
        { dropdown: false, to: '/dokumenty/piecza-zastepcza/', text: 'Piecza zastępcza', color: 'blue' },
        { dropdown: false, to: '/dokumenty/pfron/', text: 'PFRON', color: 'green' },
        { dropdown: false, to: '/dokumenty/aktywny-samorzad/', text: 'Aktywny Samorząd', color: 'green' },
    ]

    const dropdownItemsForContact = [
        { dropdown: false, to: '/kontakt/kontakt/', text: 'Dane kontaktowe', color: 'red' },
        { dropdown: false, to: '/kontakt/deklaracja/', text: 'Deklaracja dostępności', color: 'red' },
        { dropdown: false, to: '/kontakt/rodo/', text: 'RODO', color: 'red' },
        { dropdown: false, to: '/kontakt/koordynatorzy/', text: 'Koordynatorzy', color: 'blue' },
    ]


    return (
        <nav className={openNav ? `${styles.navbar} ${styles.open}` : styles.navbar}>
            <Link className={styles.nav_item} to='/'><div>Aktualności</div></Link>
            <Dropdown subSiteTitle={subSiteTitle} items={dropdownItemsForAbout} text={'Nasza praca'} primary={true} />
            <Dropdown subSiteTitle={subSiteTitle} items={dropdownItemsForDocuments} text={'Dokumenty'} primary={true} />
            <Dropdown subSiteTitle={subSiteTitle} items={dropdownItemsForContact} text={'Kontakt'} primary={true} />
        </nav>
    )
};


export default Navbar;