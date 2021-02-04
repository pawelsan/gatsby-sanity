import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";
import styles from "./news-post.module.css";

function NewsPost(props) {
  const { _rawBody, title, mainImage, publishedAt } = props;
  return (
    <article className={styles.news_article}>
      <div className={styles.news_header}>
        {mainImage && mainImage.asset && (
          <div className={styles.news_image}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                // .width(200)
                .height(200)
                .fit("crop")
                .auto("format")
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )}
        <div>
          <h1 className={styles.news_title}>{title}</h1>
          <span>Data publikacji: </span>
          {publishedAt && (
            <span>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "DD.MM.YYYY")}
            </span>
          )}
        </div>
      </div>
      <div className={styles.raw_content}>
        {_rawBody && <PortableText blocks={_rawBody} />}
      </div>
      <div className={styles.news_footer}>Zespół PCPR<br /><Link to="/">Powrót na stronę główną</Link></div>
    </article>
  );
}

export default NewsPost;
