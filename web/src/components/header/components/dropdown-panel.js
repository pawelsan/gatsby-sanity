import { Link } from "gatsby";
import React from "react";
import styles from "../styles/header.module.css";

const DropdownPanel = ({ items }) => {
  const dropdownItems =
    items &&
    items.map((item, index) => (
      <li key={index}>
        <Link
          key={index}
          className={styles.dropdown_item}
          activeClassName={styles.active}
          to={`/${item.slug.current}`}
        >
          {item.pageName}
        </Link>
      </li>
    ));
  return (
    <div className={styles.dropdown_panel}>
      <ul className={styles.dropdown_container}>{dropdownItems}</ul>
    </div>
  );
};
export default DropdownPanel;
