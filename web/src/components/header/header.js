import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Toggler from "./components/toggler";
import Navbar from "./components/navbar";
import Home from "./components/home";
import DropdownParent from "./components/dropdownParent";
import DropdownPanel from "./components/dropdownPanel";
import DropdownPanelWithCategories from "./components/dropdownPanelWithCategories";
import logo from "../../images/logo.png";
import coatOfArms from "../../images/herb_powiatu.png";
import bip from "../../images/bip.png";
import dropdownItemsQuery from "./data/dropdownItemsQuery";
import { sortNavItemsByOrder } from "../../lib/helpers";
import styles from "./styles/header.module.css";

const Header = () => {
  // initial constants
  const navItems = {
    main: "Strona Główna",
    about: "O nas",
    tasks: "Zadania",
    projects: "Projekty",
    cooperation: "Współpraca",
    contact: "Kontakt",
  };

  // data fetch
  const data = dropdownItemsQuery();
  let tasksDropdownItems = [];
  let aboutDropdownItems = [];
  let taskCategories = [];
  data.allSanityCategory.edges.map((category) => taskCategories.push(category.node));
  data.allSanityTasksOfPcpr.edges.map((item) => tasksDropdownItems.push(item.node));
  data.allSanityAboutPcpr.edges.map((item) => aboutDropdownItems.push(item.node));
  aboutDropdownItems = sortNavItemsByOrder(aboutDropdownItems, "order");

  // states
  const [navIsShown, setNavIsShown] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    Math.max(typeof window !== `undefined` ? window.document.documentElement.clientWidth : null)
  );

  // handlers
  const handleShowNav = () => {
    smallViewport && setNavIsShown(!navIsShown);
  };
  const handleViewportWidth = () => {
    setViewportWidth(Math.max(typeof window !== `undefined` ? window.document.documentElement.clientWidth : null));
  };

  if (typeof window !== `undefined`) {
    window.onresize = handleViewportWidth;
    window.onload = handleViewportWidth;;
  }

  const smallViewport = viewportWidth < 768 ? true : false

  return (
    <header>
      <div className={styles.header_container}>
        {smallViewport && <Toggler handleShowNav={handleShowNav} navIsShown={navIsShown} />}
        <Navbar navIsShown={navIsShown} >
          <Home title={navItems.main} smallViewport={smallViewport} handleShowNav={handleShowNav} />
          <DropdownParent title={navItems.about}>
            <DropdownPanel items={aboutDropdownItems} />
          </DropdownParent>
          <DropdownParent title={navItems.tasks}>
            <DropdownPanelWithCategories items={tasksDropdownItems} categories={taskCategories} />
          </DropdownParent>
          <DropdownParent title={navItems.projects}>
            <DropdownPanel items={null} />
          </DropdownParent>
          <DropdownParent title={navItems.cooperation}>
            <DropdownPanel items={null} />
          </DropdownParent>
          <DropdownParent title={navItems.contact}>
            <DropdownPanel items={null} />
          </DropdownParent>
        </Navbar>
        {smallViewport && (
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
