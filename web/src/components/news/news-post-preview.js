import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, getNewsUrl } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";

import styles from "./news-post-preview.module.css";

function NewsPostPreview(props) {
  return (
    <Link to={getNewsUrl(props.slug.current)} className={styles.post_link}>
      <div className={styles.post}>
        <h3 className={styles.post_title}>{props.title}</h3>
        <div className={styles.post_date}>{format(props.publishedAt, "DD.MM.YYYY")}</div>
        <div className={styles.post_content}>
          {props.mainImage && props.mainImage.asset && (
            <img
              className={styles.post_image}
              src={imageUrlFor(buildImageObj(props.mainImage))
                .height(70)
                .auto("format")
                .url()}
              alt={props.mainImage.alt}
            />
          )}
          {props._rawExcerpt && <PortableText blocks={props._rawExcerpt} />}
        </div>
        <span className={styles.post_lead}>Dowiedz się więcej &gt;</span>
      </div>
    </Link>
  );
}

export default NewsPostPreview;
