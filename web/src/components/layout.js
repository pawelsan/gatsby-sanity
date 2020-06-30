import React from 'react'
import Header from './header'
import Aside from './aside'
import Footer from './footer'
import Container from './container'
import styles from './layout.module.css'


const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <Container>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <main className={styles.main}>
      <Aside subSiteTitle={children[0] ? children[0].props.title : null} ></Aside>
      <div className={styles.page}>{children}</div>
    </main>
    <Footer />
  </Container>
)

export default Layout
