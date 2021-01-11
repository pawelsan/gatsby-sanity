import { Link } from "gatsby";
import React from "react";
import styles from "./navbar.module.css";

const DropdownCategory = ({ items, title, styling }) => {
  const dropdownItems = items.map((item, index) => (
    <li key={index}>
      <Link
        key={index}
        className={styles.dropdown_item}
        activeClassName={styles.active}
        to={`/${item.category.slug.current}/${item.slug.current}`}
      >
        {item.pageName}
      </Link>
    </li>
  ));
  let applicableStyle;

  switch (styling) {
    case "pomoc-spoleczna":
      applicableStyle = "orange";
      break;
    case "piecza-zastepcza":
      applicableStyle = "blue";
      break;
    case "rehabilitacja-spoleczna":
      applicableStyle = "green";
      break;
    default:
      applicableStyle = "red";
  }

  return (
    <div className={`${styles.dropdown_section} ${styles[applicableStyle]}`}>
      <span className={styles.dropdown_section_title}>{`${title}:`}</span>
      <ul className={styles.dropdown_section_list}>{dropdownItems}</ul>
    </div>
  );
};

const DropdownPanelWithCategories = ({ items, categories }) => {
  const dropdownSections = categories.map((category, index) => (
    <DropdownCategory
      key={index}
      items={items.filter((item) => item.category.title === category.title)}
      styling={category.slug.current}
      title={category.title}
    />
  ));
  return (
    <div className={styles.dropdown_panel}>
      <div className={styles.dropdown_container}>{dropdownSections}</div>
    </div>
  );
};

export default DropdownPanelWithCategories;
