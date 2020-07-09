import { Link } from 'gatsby'
import React, { useState } from 'react'
// import Navbar from './navbar/navbar'
import logo from '../images/logo.png'
import coatOfArms from '../images/herb_powiatu.jpg'
import bip from '../images/bip.png'
import Toggler from './toggler'
import DropdownMenu from './dropdown'
import styles from './header.module.css'


const Header = ({ subSiteTitle }) => {
  const [openNav, setOpenNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);


  // const togglerHandler = () => {
  //   console.log("clicked");
  //   if (!asideOpen) {
  //     setAsideOpen(true);
  //   } else {
  //     setAsideOpen(false);
  //   }
  // };
  let active
  if (subSiteTitle === "Informacje ogólne" || subSiteTitle === "Rodziny zastępcze" || subSiteTitle === "Osoby z niepełnosprawnością" || subSiteTitle === "Pomoc instytucjonalna") {
    active = true

  } else {
    active = false
  }

  return (
    <header className={
      subSiteTitle === "Rodziny zastępcze" ? styles.header_border_blue :
        subSiteTitle === "Osoby z niepełnosprawnością" ? styles.header_border_green :
          subSiteTitle === "Pomoc instytucjonalna" ? styles.header_border_orange :
            styles.header_border_red
    }>
      <div className={styles.header_container}>
        <Toggler click={() => setOpenNav(!openNav)} open={openNav} />
        <div className={styles.logo_wrapper}>
          <a href="https://www.powiat-zyrardowski.pl/"><img className={styles.coatOfArms} src={coatOfArms} alt="Herb powiatu" /></a>
          <Link to='/'><img className={styles.logo} src={logo} alt="Logo PCPR" /></Link>
        </div>
        <nav className={openNav ? `${styles.navbar} ${styles.open}` : styles.navbar}>
          <Link className={styles.nav_item} to='/'><div>Strona</div><div>główna</div></Link>
          <div className={styles.nav_item} onClick={() => setOpenDropdown(!openDropdown)}>
            <div className={
              active && subSiteTitle === "Rodziny zastępcze" ? `${styles.nav_item_dropdown} ${styles.active_blue}` :
                active && subSiteTitle === "Osoby z niepełnosprawnością" ? `${styles.nav_item_dropdown} ${styles.active_green}` :
                  active && subSiteTitle === "Pomoc instytucjonalna" ? `${styles.nav_item_dropdown} ${styles.active_orange}` :
                    active ? `${styles.nav_item_dropdown} ${styles.active}` : styles.nav_item_dropdown
            }>
              <div>
                <div>Nasza</div>
                <div>praca</div>
              </div>
              <div className={openDropdown && active ? `${styles.arrow} ${styles.arrow_up} ${styles.arrow_active}` : openDropdown ? `${styles.arrow} ${styles.arrow_up}` : active ? `${styles.arrow_active} ${styles.arrow} ` : styles.arrow}></div>
            </div>
            {openDropdown && <DropdownMenu />}
          </div>
          <Link className={styles.nav_item} to='/deklaracja/'><div>Deklaracja</div><div>dostępności</div></Link>
          <Link className={styles.nav_item} to='/dokumenty/'><div>Dokumenty</div><div>do pobrania</div></Link>
          <Link className={styles.nav_item} to='/kontakt/'><div>Dane</div><div>kontaktowe</div></Link>
        </nav>
        <a href="http://www.pcprzyrardow.naszbip.pl/"><img style={{ width: "30px", height: "30px" }} src={bip} alt="Logo bip" /></a>
      </div>
    </header>
  )
}

export default Header
