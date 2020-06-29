import React from 'react'
import Header from './header'
import Aside from './aside'
import Footer from './footer'

import styles from './layout.module.css'


const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <main className={styles.main}>
      <Aside></Aside>
      <div>{children}</div>
    </main>
    <Footer />
  </>
)

export default Layout
