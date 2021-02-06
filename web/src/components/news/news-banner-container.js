import React from 'react';
import NewsBanner from "./news-banner";

import styles from "./news-banner.module.css";

const NewsPostBannerContainer = ({ postNodes }) => {

    return (
        <ul>
            {postNodes &&
                postNodes.map((node) => (
                    <li key={node.id} className={styles.banner_item}>
                        <NewsBanner {...node} />
                    </li>
                ))}
        </ul>
    );
}

export default NewsPostBannerContainer;