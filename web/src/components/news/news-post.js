import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";
import NewsNavigation from "./news-navigation";
import styles from "./news-post.module.css";

function NewsPost(props) {
  const { _rawBody, title, mainImage, publishedAt, previous, next } = props;
  return (
    <article className={styles.news_article}>
      <div className={styles.news_header}>
        {mainImage && mainImage.asset && (
          <div className={styles.news_image}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
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
      <div className={styles.news_footer}>Zespół PCPR<br />
        <NewsNavigation previous={previous} next={next} />
      </div>
    </article>
  );
}

export default NewsPost;
