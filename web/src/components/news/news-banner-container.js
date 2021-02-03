import React from 'react';
import NewsBanner from "./news-banner";

const NewsPostBannerContainer = ({ postNodes }) => {

    return (
        <ul>
            {postNodes &&
                postNodes.map((node) => (
                    <li key={node.id}>
                        <NewsBanner {...node} />
                    </li>
                ))}
        </ul>
    );
}

export default NewsPostBannerContainer;