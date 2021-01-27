import React from "react";
import Header from "./header/header";
import Footer from "./footer";
import Container from "./container";
import Background from "./background";
import styles from "./layout.module.css";

const Layout = ({ children, siteTitle, darkMode, toggleDarkMode }) => {
  return (
    <Container>
      <Background />
      <Header siteTitle={siteTitle} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
