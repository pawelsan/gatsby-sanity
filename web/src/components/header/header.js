import { Link } from "gatsby";
import React, { useState } from "react";
import Toggler from "./components/toggler";
import Navbar from "./components/navbar";
import Home from "./components/home";
import DropdownParent from "./components/dropdownParent";
import DropdownPanel from "./components/dropdownPanel";
import DropdownPanelWithCategories from "./components/dropdownPanelWithCategories";
import logo from "../../images/logo-small.png";
import facebook from "../../images/f_logo_RGB-Blue_58.png";
import bip from "../../images/bip.png";
import DarkModeToggler from "./components/darkmodetoggler"
import LargeFontToggler from "./components/largefonttoggler"
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
  let projectsDropdownItems = [];
  let cooperationDropdownItems = [];
  let contactDropdownItems = [];
  let taskCategories = [];
  data.allSanityCategory.edges.map((category) => taskCategories.push(category.node));
  data.allSanityTasksOfPcpr.edges.map((item) => tasksDropdownItems.push(item.node));
  data.allSanityAboutPcpr.edges.map((item) => aboutDropdownItems.push(item.node));
  data.allSanityProjects.edges.map((item) => projectsDropdownItems.push(item.node));
  data.allSanityCooperation.edges.map((item) => cooperationDropdownItems.push(item.node));
  data.allSanityContact.edges.map((item) => contactDropdownItems.push(item.node));
  aboutDropdownItems = sortNavItemsByOrder(aboutDropdownItems, "order");
  tasksDropdownItems = sortNavItemsByOrder(tasksDropdownItems, "order");
  projectsDropdownItems = sortNavItemsByOrder(projectsDropdownItems, "order");
  cooperationDropdownItems = sortNavItemsByOrder(cooperationDropdownItems, "order");
  contactDropdownItems = sortNavItemsByOrder(contactDropdownItems, "order");
  taskCategories = sortNavItemsByOrder(taskCategories, "order");

  const [navIsShown, setNavIsShown] = useState(false);

  const handleShowNav = () => {
    setNavIsShown(!navIsShown);
  };

  return (
    <header>
      <div className={styles.header_container}>
        <Toggler handleShowNav={handleShowNav} navIsShown={navIsShown} />
        <Navbar navIsShown={navIsShown} >
          <Home title={navItems.main} handleShowNav={handleShowNav} />
          <DropdownParent title={navItems.about}>
            <DropdownPanel items={aboutDropdownItems} />
          </DropdownParent>
          <DropdownParent title={navItems.tasks}>
            <DropdownPanelWithCategories items={tasksDropdownItems} categories={taskCategories} />
          </DropdownParent>
          <DropdownParent title={navItems.projects}>
            <DropdownPanel items={projectsDropdownItems} />
          </DropdownParent>
          <DropdownParent title={navItems.cooperation}>
            <DropdownPanel items={cooperationDropdownItems} />
          </DropdownParent>
          <DropdownParent title={navItems.contact}>
            <DropdownPanel items={contactDropdownItems} />
          </DropdownParent>
        </Navbar>
        <div className={styles.logo_wrapper}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Logo PCPR" />
          </Link>
        </div>
        <div className={styles.rightside_wrapper}>
          <a href="http://www.pcprzyrardow.naszbip.pl/" rel="noopener noreferrer" target="_blank">
            <img src={bip} alt="Logo bip" />
          </a>
          <a href="https://www.facebook.com/PowiatoweCentrumPomocyRodzinieZyrardow/" rel="noopener noreferrer" target="_blank">
            <img src={facebook} alt="Logo facebook" />
          </a>
          <DarkModeToggler />
          <LargeFontToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
