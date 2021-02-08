import React from 'react';
import { Link } from "gatsby";
import styles from "./news-navigation-link.module.css"

const NewsNavigationLink = ({ to, rel, text }) => {
    return (
        <Link className={styles.navigation_link} to={to} rel={rel}>
            {text}
        </Link>
    );
}

export default NewsNavigationLink;