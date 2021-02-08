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
            <div className={styles.news_list_pagination}>
                {!isFirst && (
                    <NewsNavigationLink to={`/aktualnosci/${prevPage}`} rel="prev" text={"←"} />
                )}
                {Array.from({ length: numPages }, (_, i) => (
                    <NewsNavigationLink key={`pagination-number${i + 1}`} to={`/aktualnosci/${i === 0 ? "" : i + 1}`} rel={null} text={i + 1} />
                ))}
                {!isLast && (
                    <NewsNavigationLink to={`/aktualnosci/${nextPage}`} rel="next" text={"→"} />
                )}
            </div>
            <div className={styles.news_list_pagination_home}>
                <NewsNavigationLink to="/" rel={null} text="Strona główna" />
            </div>
        </>
    );
}

export default NewsListPagination;