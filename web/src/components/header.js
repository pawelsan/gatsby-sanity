import { Link } from "gatsby";
import React, { useState } from "react";
import Navbar from "./navbar/navbar";
import logo from "../images/logo.png";
import coatOfArms from "../images/herb_powiatu.png";
import bip from "../images/bip.png";
import Toggler from "./toggler";

import styles from "./header.module.css";

const Header = ({ subSiteTitle }) => {
  const [navIsShown, setNavIsShown] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    Math.max(document.documentElement.clientWidth)
  );

  const handleShowNav = () => {
    setNavIsShown(!navIsShown);
  };
  const handleViewportWidth = () => {
    setViewportWidth(Math.max(document.documentElement.clientWidth));
  };

  window.onresize = handleViewportWidth;
  window.onload = handleViewportWidth;

  console.log(viewportWidth);

  // const togglerHandler = () => {
  //   console.log("clicked");
  //   if (!asideOpen) {
  //     setAsideOpen(true);
  //   } else {
  //     setAsideOpen(false);
  //   }
  // };

  return (
    <header
      className={
        // subSiteTitle === "Rodziny zastępcze" ? styles.header_border_blue :
        //   subSiteTitle === "Osoby z niepełnosprawnością" ? styles.header_border_green :
        //     subSiteTitle === "Pomoc instytucjonalna" ? styles.header_border_orange :
        styles.header_border_red
      }
    >
      <div
        className={
          navIsShown ? `${styles.header_container} ${styles.open_header}` : styles.header_container
        }
      >
        {viewportWidth < 768 && <Toggler handleShowNav={handleShowNav} navIsShown={navIsShown} />}
        {/* <div className={`${styles.logo_wrapper} ${styles.nav_item} `}>
          <Link to='/'><img className={styles.logo} src={logo} alt="Logo PCPR" /></Link>
        </div> */}
        <Navbar navIsShown={navIsShown} subSiteTitle={subSiteTitle} />
        {viewportWidth < 768 && (
          <div className={styles.logo_wrapper}>
            <Link to="/">
              <img className={styles.logo} src={logo} alt="Logo PCPR" />
            </Link>
          </div>
        )}
        <div className={styles.rightside_wrapper}>
          <a href="http://www.pcprzyrardow.naszbip.pl/">
            <img src={bip} alt="Logo bip" />
          </a>
          <a href="https://www.powiat-zyrardowski.pl/">
            <img src={coatOfArms} alt="Herb powiatu" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
