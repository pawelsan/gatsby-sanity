import { Link } from 'gatsby';
import React from 'react';
import styles from './navbar.module.css'

const DropdownSection = ({ items, title }) => {
    const dropdownItems = items.map((item, index) =>
        <li key={index} className={styles.dropdown_item}>
            <Link key={index}
                activeClassName={styles.active}
                to={`/${item.category.slug.current}/${item.slug.current}`}>{item.pageName}
            </Link>
        </li>
    )
    return (
        <div className={styles.dropdown_section}>
            <span className={styles.dropdown_section_title}>{title}</span>
            <ul className={styles.dropdown_section_list}>{dropdownItems}</ul>
        </div>
    )

}

const DropdownPanelWithSections = ({ items, categories }) => {
    const dropdownSections = categories.map((category, index) =>
        <DropdownSection
            key={index}
            items={items.filter(item => item.category.title === category.title)}
            title={category.title}

        />
    )
    return (
        <div className={styles.dropdown_panel}>
            <div className={styles.dropdown_container}>
                {dropdownSections}
            </div>
        </div>
    )
}

export default DropdownPanelWithSections