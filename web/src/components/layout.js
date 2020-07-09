import React from 'react'
import Header from './header'
// import Aside from './aside'
import Footer from './footer'
import Container from './container'
import Background from './background'
import styles from './layout.module.css'


const Layout = ({ children, siteTitle }) => {

  return (
    <Container>
      <Background />
      <Header siteTitle={siteTitle} subSiteTitle={children[0] ? children[0].props.title : null} />
      <main className={styles.main}>
        {children}
        {/* <Aside subSiteTitle={children[0] ? children[0].props.title : null} ></Aside> */}
        {/* <div className={styles.page}>{children}</div> */}
      </main>
      <Footer />
    </Container>
  )
}

export default Layout
