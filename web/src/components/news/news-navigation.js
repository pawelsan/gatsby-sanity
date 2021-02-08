import React from 'react';
import NewsNavigationLink from "./news-navigation-link"
import styles from "./news-navigation.module.css"

const NewsNavigation = (props) => {
    const { next, previous } = props
    return (
        <ul className={styles.news_navigation}>
            {next && (<li>
                <NewsNavigationLink to={`/aktualnosci/${next.slug.current}`} rel="next" text="← Nowszy wpis" />
            </li>
            )}
            <li>
                <NewsNavigationLink to="/" rel={null} text="Strona główna" />
            </li>
            {previous && (<li>
                <NewsNavigationLink to={`/aktualnosci/${previous.slug.current}`} rel="prev" text="Starszy wpis →" />
            </li>)}
        </ul>
    );
}

export default NewsNavigation;