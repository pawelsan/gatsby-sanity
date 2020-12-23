import { Link } from 'gatsby';
import React from 'react';
import styles from './navbar.module.css'

const DropdownSection = (props) => {
    const selectedItems = props.items.filter(item => item.categories[0].title === props.category);
    const section = selectedItems.map((item, index) =>
        <li><Link key={index}
            className={styles.dropdown_item}
            activeClassName={styles.active}
            to={`/${props.path}/${item.slug.current}`}>{item.pageName}</Link></li>
    )
    return (
        <div className={styles.dropdown_section}>
            <span className={styles.dropdown_section_title}>{props.category}</span>
            <ul className={styles.dropdown_section_list}>{section}</ul>
        </div>
    )

}

const DropdownPanelWithSections = ({ items, categories, path }) => {
    const dropdownItems = categories.map((category, index) =>
        <DropdownSection
            key={index}
            items={items}
            path={path}
            category={category}

        />
    )
    return (
        <div className={styles.dropdown_panel}>
            <div className={styles.dropdown_container}>
                {dropdownItems}
            </div>
        </div>
    )
}

export default DropdownPanelWithSections