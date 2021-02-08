import React from 'react';
import NewsNavigationLink from "./news-navigation-link";
import styles from "./news-list-pagination.module.css";

const NewsListPagination = ({ currentPage, numPages }) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
        <>
            <ul className={styles.news_list_pagination}>
                {!isFirst && (
                    <li>
                        <NewsNavigationLink to={`/aktualnosci/${prevPage}`} rel="prev" text={"←"} />
                    </li>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                    <li key={`pagination-number${i + 1}`}>
                        <NewsNavigationLink to={`/aktualnosci/${i === 0 ? "" : i + 1}`} rel={null} text={i + 1} />
                    </li>
                ))}
                {!isLast && (
                    <li>
                        <NewsNavigationLink to={`/aktualnosci/${nextPage}`} rel="next" text={"→"} />
                    </li>
                )}
            </ul>
            <div className={styles.news_list_pagination_home}>
                <NewsNavigationLink to="/" rel={null} text="Strona główna" />
            </div>
        </>
    );
}

export default NewsListPagination;