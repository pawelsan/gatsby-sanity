import { Link } from "gatsby";
import React, { useState } from "react";
import NavbarToggler from "./components/navbar-toggler";
import Navbar from "./components/navbar";
import Home from "./components/home";
import DropdownParent from "./components/dropdown-parent";
import DropdownPanel from "./components/dropdown-panel";
import DropdownPanelWithCategories from "./components/dropdown-panel-categories";
import RightSideWrapper from "./components/rightside-wrapper";
import logo from "../../images/logo-small.png";
import dropdownItemsQuery from "./data/dropdown-items-query";
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
        <NavbarToggler handleShowNav={handleShowNav} navIsShown={navIsShown} />
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
        <RightSideWrapper />
      </div>
    </header>
  );
};

export default Header;
