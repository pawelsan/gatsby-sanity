import React, { useState, useEffect } from 'react';
import NewsPostPreview from "./news-post-preview";
import Pagination from "./pagination";
import styles from "./news-post-preview-container.module.css";

const NewsPostPreviewContainer = ({ postNodes }) => {
    const [currentSelection, setCurrentSelection] = useState(1);
    const newsPerSelection = 6;
    const indexOfLastNews = currentSelection * newsPerSelection;
    const indexOfFirstNews = indexOfLastNews - newsPerSelection;
    const newsToBeShownPerSelection = postNodes && postNodes.slice(indexOfFirstNews, indexOfLastNews);

    const changeSelection = (selectionNumber) => {
        setCurrentSelection(selectionNumber)
    }
    console.log(currentSelection)
    return (
        <>
            <h2>Aktualności</h2>
            <ul className={styles.post_container}>
                {newsToBeShownPerSelection &&
                    newsToBeShownPerSelection.map((node) => (
                        <li key={node.id}>
                            <NewsPostPreview {...node} />
                        </li>
                    ))}
            </ul>
            <Pagination newsPerSelection={newsPerSelection} totalNews={postNodes.length} changeSelection={changeSelection} currentSelection={currentSelection} />
        </>
    );
}

export default NewsPostPreviewContainer;