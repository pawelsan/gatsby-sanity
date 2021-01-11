import React, { useState, useEffect, cloneElement, Children } from "react";
import styles from "./navbar.module.css";

const DropdownParent = ({ title, children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    setActiveItem(
      children.props.items && children.props.items.find((item) => item.slug.current === location.pathname.split("/").pop())
    );
  }, []);

  console.log(openDropdown);

  // handlers
  const handleMouseEnter = (e) => {
    setOpenDropdown(true);
    console.log(e.target)
  };
  const handleMouseLeave = (e) => {
    setOpenDropdown(false);
    console.log(e.target)
  };

  return (
    <li
      className={activeItem ? `${styles.nav_item_active} ${styles.nav_item}` : styles.nav_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{title}</span>
      {openDropdown && children}
    </li>
  );
};

export default DropdownParent;
