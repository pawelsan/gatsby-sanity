import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const DropdownParent = ({ title, children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    setActiveItem(
      children.props.items && children.props.items.find((item) => item.slug.current === location.pathname.split("/").pop())
    );
  }, []);

  // handlers
  const handleMouseOver = () => {
    setOpenDropdown(true);
  };
  const handleMouseLeave = () => {
    setOpenDropdown(false);
  };

  return (
    <li
      className={activeItem ? `${styles.nav_item_active} ${styles.nav_item}` : styles.nav_item}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <span>{title}</span>
      {openDropdown && children}
    </li>
  );
};

export default DropdownParent;
