import React from 'react';
import NewsPostPreview from "./news-post-preview";
import styles from "./news-post-preview-container.module.css";

const NewsPostPreviewContainer = ({ postNodes }) => {
    return (
        <>
            <ul className={styles.post_container}>
                {postNodes &&
                    postNodes.map((node) => (
                        <li key={node.id} className={styles.post_item}>
                            <NewsPostPreview {...node} />
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default NewsPostPreviewContainer;