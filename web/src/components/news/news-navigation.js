import React from 'react';
import NewsNavigationLink from "./news-navigation-link"
import styles from "./news-navigation.module.css"

const NewsNavigation = (props) => {
    const { next, previous } = props
    return (
        <ul className={styles.news_navigation}>
            <li className={styles.news_navigation_item}>
                {next && (<NewsNavigationLink to={`/aktualnosci/${next.slug.current}`} rel="next" text="← Nowszy wpis" />
                )}
            </li>
            <li className={styles.news_navigation_item}>
                <NewsNavigationLink to="/" rel={null} text="Strona główna" />
            </li>
            <li className={styles.news_navigation_item}>
                {previous && (<NewsNavigationLink to={`/aktualnosci/${previous.slug.current}`} rel="prev" text="Starszy wpis →" />
                )}
            </li>
        </ul>
    );
}

export default NewsNavigation;