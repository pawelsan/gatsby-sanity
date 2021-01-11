import { Link } from "gatsby";
import React from "react";
import logo from "../../images/logo-small.png";
import dropdownItemsQuery from "./dropdownItemsQuery";
import DropdownParent from "./dropdownParent";
import DropdownPanel from "./dropdownPanel";
import DropdownPanelWithCategories from "./dropdownPanelWithCategories";
import { sortNavItemsByOrder } from "../../lib/helpers";
import styles from "./navbar.module.css";

const Navbar = ({ navIsShown }) => {
  // initial constants
  const navItems = {
    main: "Strona Główna",
    about: "O nas",
    tasks: "Zadania PCPR",
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
        <li className={styles.nav_item}>
          <Link to="/" className={styles.nav_item} activeClassName={styles.nav_item_active}>
            <img className={styles.logo} src={logo} alt="Logo PCPR" />
            <span>{navItems.main}</span>
          </Link>
        </li>
        <DropdownParent title={navItems.about}>
          <DropdownPanel items={aboutDropdownItems} />
        </DropdownParent>
        <DropdownParent title={navItems.tasks}>
          <DropdownPanelWithCategories items={tasksDropdownItems} categories={taskCategories} />
        </DropdownParent>
        <DropdownParent title={navItems.projects}>
          <DropdownPanel items={tasksDropdownItems} categories={taskCategories} />
        </DropdownParent>
        <DropdownParent title={navItems.cooperation}>
          <DropdownPanel items={tasksDropdownItems} categories={taskCategories} />
        </DropdownParent>
        <DropdownParent title={navItems.contact}>
          <DropdownPanel items={tasksDropdownItems} categories={taskCategories} />
        </DropdownParent>
      </ul>
    </nav>
  );
};

export default Navbar;
