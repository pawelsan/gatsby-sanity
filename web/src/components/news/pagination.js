import React from 'react';
import styles from "./pagination.module.css"

const Pagination = ({ newsPerSelection, totalNews, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNews / newsPerSelection); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.pagination}>
            <ul className={styles.pagination_container}>
                {pageNumbers.map(number => (
                    <li className={styles.pagination_item} key={number}>
                        <button className={styles.pagination_item_button} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;