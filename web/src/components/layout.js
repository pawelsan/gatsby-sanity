import React from "react";
import Header from "./header/header";
import Footer from "./footer";
import Container from "./container";
import Background from "./background";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <Container>
      <Background />
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
