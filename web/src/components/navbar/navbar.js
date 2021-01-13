
import React from "react";
import Home from "./home";
import dropdownItemsQuery from "./dropdownItemsQuery";
import DropdownParent from "./dropdownParent";
import DropdownPanel from "./dropdownPanel";
import DropdownPanelWithCategories from "./dropdownPanelWithCategories";
import { sortNavItemsByOrder } from "../../lib/helpers";
import styles from "./navbar.module.css";

const Navbar = ({ navIsShown, handleShowNav, smallViewport }) => {
  // initial constants
  const navItems = {
    main: "Strona Główna",
    about: "O nas",
    tasks: "Zadania",
    projects: "Projekty",
    cooperation: "Współpraca",
    contact: "Kontakt",
  };

  const data = dropdownItemsQuery();
  let tasksDropdownItems = [];
  let aboutDropdownItems = [];
  let taskCategories = [];
  data.allSanityCategory.edges.map((category) => taskCategories.push(category.node));
  data.allSanityTasksOfPcpr.edges.map((item) => tasksDropdownItems.push(item.node));
  data.allSanityAboutPcpr.edges.map((item) => aboutDropdownItems.push(item.node));

  aboutDropdownItems = sortNavItemsByOrder(aboutDropdownItems, "order");

  return (
    <nav
      className={styles.navbar}
      className={navIsShown ? styles.navbar : `${styles.navbar} ${styles.hidden}`}
    >
      <ul>
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
      </ul>
    </nav>
  );
};

export default Navbar;
