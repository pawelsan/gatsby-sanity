import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react';
// import { useStaticQuery, graphql } from "gatsby";
import { navItemQuery, dropdownItemsForAbout, dropdownItemsForDocuments, dropdownItemsForContact } from './dropdownItems'
// import Dropdown from './dropdown';
import DropdownMenu from './dropdown-menu';
import { sortNavItemsByOrder } from '../../lib/helpers';
import styles from './navbar.module.css'

const Navbar = ({ openNav }) => {

  const data = navItemQuery()
  let tasksNavItems = [];
  let aboutNavItems = [];
  data.allSanityTasksOfPcpr.edges.map(item => tasksNavItems.push(item.node));
  data.allSanityAboutPcpr.edges.map(item => aboutNavItems.push(item.node));
  console.log(aboutNavItems)

  aboutNavItems = sortNavItemsByOrder(aboutNavItems, 'order')
  console.log(aboutNavItems)


  const Dropdown = ({ items, text }) => {

    const [openDropdown, setOpenDropdown] = useState(true);
    // const [activeItem, setActiveItem] = useState();
    // const [activeItemInNestedDropdown, setActiveItemInNestedDropdown] = useState();

    // useEffect(() => {
    //   setActiveItem(items.find(item => item.to === location.pathname));
    //   setActiveItemInNestedDropdown(
    //     items
    //       .filter(item => item.to === null)
    //       .find(item => item.subItems
    //         .find(subItem => subItem.to === location.pathname)))
    // }

    //   , []);

    // let activeDropdown

    // let dropdownColor

    // // check if an active link is included in a given dropdown
    // if (activeItem) {
    //   activeDropdown = true
    //   dropdownColor = activeItem.color
    //   // check if an active link is included in a given dropdown's nested dropdown
    // } else if (activeItemInNestedDropdown) {
    //   activeDropdown = true
    //   dropdownColor = activeItemInNestedDropdown.color
    // } else {
    //   activeDropdown = false
    //   dropdownColor = null
    // }

    return (
      <div
      // className={activeDropdown ? `${styles.nav_item} ${styles.active} ${styles[`active_item_${dropdownColor}`]}` : `${styles.nav_item} ${styles[`nav_item_${dropdownColor}`]}`}
      // onMouseEnter={() => setOpenDropdown(true)}
      // onMouseLeave={() => setTimeout(function () { setOpenDropdown(false); }, 1000)
      // }
      >
        <div>{text}</div>
        {openDropdown && <DropdownMenu items={items} />}
      </div >
    );
  }

  return (
    <nav className={openNav ? `${styles.navbar} ${styles.open}` : styles.navbar}>
      <Link className={styles.nav_item} activeClassName={`${styles.active} ${styles.active_item_red}`} to='/'><div>Aktualności</div></Link>
      {/* <Link className={styles.nav_item} activeClassName={`${styles.active} ${styles.active_item_red}`} to='/o-nas'><div>O nas</div></Link> */}
      <Dropdown items={aboutNavItems} text={'O nas'} />
      {/* <Dropdown items={dropdownItemsForAbout} text={'Nasza praca'} />
      <Dropdown items={dropdownItemsForDocuments} text={'Dokumenty'} />
      <Dropdown items={dropdownItemsForContact} text={'Kontakt'} /> */}
    </nav>
  )
};


export default Navbar;

const navItemsQuery = graphql`
  query navItemQuery {
    allSanityTasksOfPcpr {
        edges {
          node {
            pageName
            categories {
              title
            }
          }
        }
      }
  }
`;