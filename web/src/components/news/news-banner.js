import { Link } from "gatsby";
import React from "react";
import { buildImageObj, getNewsUrl } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";

import styles from "./news-banner.module.css";

function NewsPostBanner(props) {
    return (
        <Link to={getNewsUrl(props.publishedAt, props.slug.current)} className={styles.banner_link}>
            <div className={styles.banner}>
                {props.mainImage && props.mainImage.asset && (
                    <img
                        className={styles.banner_image}
                        src={imageUrlFor(buildImageObj(props.mainImage))
                            .width(80)
                            .height(80)
                            .auto("format")
                            .url()}
                        alt={props.mainImage.alt}
                    />
                )}
                <div>
                    <h3>{props.title}</h3>
                    <div className={styles.banner_text}>{props._rawExcerpt && <PortableText blocks={props._rawExcerpt} />}</div>
                    <span className={styles.banner_lead}>Dowiedz się więcej &gt;</span>
                </div>
            </div>
        </Link>
    );
}

export default NewsPostBanner;