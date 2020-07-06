import { Link } from 'gatsby'
import React, { useState } from 'react'
// import Navbar from './navbar/navbar'
import logo from '../images/logo.png'
import coatOfArms from '../images/herb_powiatu.jpg'
import Toggler from './toggler'
import DropdownMenu from './dropdown'
import styles from './header.module.css'


const Header = ({ subSiteTitle }) => {
  const [open, setOpen] = useState(false);

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
      <div className={styles.logo_wrapper}>
        <a href="https://www.powiat-zyrardowski.pl/"><img src={coatOfArms} alt="Herb powiatu" /></a>
        <Link to='/'><img className={styles.logo} src={logo} alt="Logo PCPR" /></Link>
      </div>
      <Toggler click={() => setOpen(!open)} open={open} />
      <nav className={styles.navbar}>
        <Link className={styles.nav_item} to='/'><div>Strona</div><div>główna</div></Link>
        <div className={active ? `${styles.nav_item} ${styles.active}` : styles.nav_item} onClick={() => setOpen(!open)}>
          <div>Nasza praca</div>
          <div className={open && active ? `${styles.arrow} ${styles.arrow_up} ${styles.arrow_active}` : open ? `${styles.arrow} ${styles.arrow_up}` : active ? `${styles.arrow_active} ${styles.arrow} ` : styles.arrow}></div>
          {open && <DropdownMenu />}
        </div>
        <Link className={styles.nav_item} to='/deklaracja/'><div>Deklaracja</div><div>dostępności</div></Link>
        <Link className={styles.nav_item} to='/dokumenty/'><div>Dokumenty</div><div>do pobranie</div></Link>
        <Link className={styles.nav_item} to='/kontakt/'><div>Skontaktuj się</div><div>z nami</div></Link>
      </nav>
    </header>
  )
}

export default Header
