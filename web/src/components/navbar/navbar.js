import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react';
import logo from '../../images/logo-small.png';
import { navItems, paths } from '../../lib/constants'
import { dropdownItemsQuery } from './dropdownItemsQuery'
// import Dropdown from './dropdown';
import DropdownPanel from './dropdownPanel';
import DropdownPanelWithSections from './dropdownPanelSections';

import { sortNavItemsByOrder } from '../../lib/helpers';
import styles from './navbar.module.css'

const Navbar = ({ openNav }) => {

  const data = dropdownItemsQuery()

  let tasksDropdownItems = [];
  let aboutDropdownItems = [];
  let taskCategories = [];
  data.allSanityCategory.edges.map(category => taskCategories.push(category.node));
  data.allSanityTasksOfPcpr.edges.map(item => tasksDropdownItems.push(item.node));
  data.allSanityAboutPcpr.edges.map(item => aboutDropdownItems.push(item.node));

  aboutDropdownItems = sortNavItemsByOrder(aboutDropdownItems, 'order');

  const Dropdown = ({ items, path, text }) => {

    const [openDropdown, setOpenDropdown] = useState(false);
    const [activeItem, setActiveItem] = useState();
    // const [activeItemInNestedDropdown, setActiveItemInNestedDropdown] = useState();
    // console.log(items.find(item => `/o-nas/${item.slug.current}` === location.pathname))
    useEffect(() => {
      setActiveItem(items && items.find(item => `${path}/${item.slug.current}` === location.pathname));
      //   setActiveItemInNestedDropdown(
      //     items
      //       .filter(item => item.to === null)
      //       .find(item => item.subItems
      //         .find(subItem => subItem.to === location.pathname)))

    }

      , []);
    let activeDropdown

    let dropdownColor

    const color = "red";

    // // check if an active link is included in a given dropdown
    if (activeItem) {
      activeDropdown = true
      dropdownColor = color
      // check if an active link is included in a given dropdown's nested dropdown
      // } else if (activeItemInNestedDropdown) {
      //   activeDropdown = true
      //   dropdownColor = activeItemInNestedDropdown.color
    } else {
      activeDropdown = false
      dropdownColor = null
    }

    return (
      <li
        className={`${styles.dropdown_parent} ${styles.nav_item}`}
        // className={activeDropdown ? `${styles.nav_item} ${styles.active} ${styles[`active_item_${dropdownColor}`]}` : `${styles.nav_item} ${styles[`nav_item_${dropdownColor}`]}`}
        onMouseEnter={() => setOpenDropdown(true)}
        onMouseLeave={() => setOpenDropdown(false)}
      >
        <span>{text}</span>
        {/* {openDropdown && <DropdownPanel items={items} taskCategories={taskCategories} path={path}
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={() => setTimeout(function () { setOpenDropdown(false); }, 1000)
          }
        />} */}
        {openDropdown && <DropdownPanelWithSections items={items} categories={taskCategories} path={path}
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={() => setTimeout(function () { setOpenDropdown(false); }, 1000)
          }
        />}

      </li >
    );
  }

  return (
    <nav
      className={styles.navbar}
    // className={openNav ? `${styles.navbar} ${styles.open}` : styles.navbar}
    >
      <ul>
        <li className={`${styles.logo_wrapper} ${styles.nav_item} `} activeClassName={styles.active}>
          <Link to='/' className={styles.link}><span>{navItems.main.split(' ')[0]}</span><img className={styles.logo} src={logo} alt="Logo PCPR" /><span>{navItems.main.split(' ')[1]}</span></Link>
        </li>
        {/* <Dropdown items={aboutDropdownItems} path={paths.about} text={navItems.about} /> */}
        <Dropdown items={tasksDropdownItems} path={paths.tasks} text={navItems.tasks} />
        {/* <Dropdown items={null} text={navItems.projects} />
        <Dropdown items={null} text={navItems.cooperation} />
        <Dropdown items={null} text={navItems.contact} /> */}
      </ul>
      {/* <Link className={styles.nav_item} activeClassName={`${styles.active} ${styles.active_item_red}`} to='/'><div>Aktualności</div></Link> */}
      {/* <Link className={styles.nav_item} activeClassName={`${styles.active} ${styles.active_item_red}`} to='/o-nas'><div>O nas</div></Link> */}

      {/* <Dropdown items={dropdownItemsForAbout} text={'Nasza praca'} />
      <Dropdown items={dropdownItemsForDocuments} text={'Dokumenty'} />
      <Dropdown items={dropdownItemsForContact} text={'Kontakt'} /> */}
    </nav>
  )
};

export default Navbar;