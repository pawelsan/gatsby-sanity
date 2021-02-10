import React from "react";
import PuzzleBackground from "./puzzle-background";
import Header from "./header/header";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <PuzzleBackground />
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <footer>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Powiatowe Centrum Pomocy Rodzinie w Żyrardowie
        </div>
      </footer>
    </div>
  );
};

export default Layout;
