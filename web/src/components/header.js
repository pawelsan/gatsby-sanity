import { Link } from 'gatsby'
import React from 'react'
import Navbar from './navbar/navbar'
import logo from '../images/logo.png'
import coatOfArms from '../images/herb_powiatu.jpg'
import Toggler from './toggler'
import styles from './header.module.css'


const Header = ({ click, asideOpen }) => {

  return (
    <header>
      <div className={styles.logo_wrapper}>
        <a href="https://www.powiat-zyrardowski.pl/"><img src={coatOfArms} alt="Herb powiatu" /></a>
        <Link to='/'><img className={styles.logo} src={logo} alt="Logo PCPR" /></Link>
      </div>
      <Toggler click={click} asideOpen={asideOpen} />
      <nav className={styles.navbar}>
        <Link className={styles.nav_item} to='/'>Stron główna</Link>
        <Link className={styles.nav_item} to='/archiwum/'>Aktualności</Link>
        <Link className={styles.nav_item} to='/deklaracja/'>Deklaracja dostępności</Link>
        <Link className={styles.nav_item} to='/dokumenty/'>Dokumenty</Link>
        <Link className={styles.nav_item} to='/kontakt/'>Kontakt</Link>
      </nav>
    </header>
  )
}

export default Header
