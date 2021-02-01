import React from 'react';
import styles from "./pagination.module.css"

const Pagination = ({ newsPerSelection, totalNews, changeSelection, currentSelection }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNews / newsPerSelection); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.pagination}>
            <ul>
                {pageNumbers.map(number => (
                    <li className={styles.pagination_item} key={number}>
                        <button className={number === currentSelection ? `${styles.pagination_item_button} ${styles.active}` : styles.pagination_item_button} onClick={() => changeSelection(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;