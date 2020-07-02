import React, { useState } from 'react'
import Header from './header'
import Aside from './aside'
import Footer from './footer'
import Container from './container'
import styles from './layout.module.css'


const Layout = ({ children, siteTitle }) => {
  const [asideOpen, setAsideOpen] = useState(false);
  console.log(asideOpen);
  const togglerHandler = () => {
    console.log("clicked");
    if (!asideOpen) {
      setAsideOpen(true);
    } else {
      setAsideOpen(false);
    }
  };
  return (
    <Container>
      <Header siteTitle={siteTitle} click={togglerHandler} asideOpen={asideOpen} />
      <main className={styles.main}>
        <Aside subSiteTitle={children[0] ? children[0].props.title : null} ></Aside>
        <div className={styles.page}>{children}</div>
      </main>
      <Footer />
    </Container>
  )
}

export default Layout
