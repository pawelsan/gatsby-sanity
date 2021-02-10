import { Link } from "gatsby";
import React, { useState } from "react";
import styles from "../styles/header.module.css";

const DropdownCategory = ({ items, title, category }) => {
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

  switch (category) {
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

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleMouseOver = () => {
    setOpenDropdown(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => setOpenDropdown(false), 100);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`${styles.dropdown_section} ${styles[applicableStyle]}`}>
      <div
        className={!openDropdown ? `${styles.dropdown_section_title} ${styles.arrow_right}` : styles.dropdown_section_title}
      >{`${title}`}</div>
      <ul className={!openDropdown ? `${styles.dropdown_section_list} ${styles.none}` : styles.dropdown_section_list}>{dropdownItems}</ul>
    </div>
  );
};

const DropdownPanelWithCategories = ({ items, categories }) => {
  const dropdownSections = categories.map((category, index) => (
    <DropdownCategory
      key={index}
      items={items.filter((item) => item.category.title === category.title)}
      category={category.slug.current}
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
