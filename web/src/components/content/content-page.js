import React from "react";
import PortableText from "../portableText";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import styles from "./content-page.module.css";

const ContentPage = (props) => {

  return (
    <>
      {props.category ? <div className={styles.page_header}>
        {props.mainImage && props.mainImage.asset && (
          <div className={styles.main_image}>
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .height(100)
                .fit("crop")
                .auto("format")
                .url()}
              alt={props.mainImage.alt}
            />
          </div>
        )}
        <h1 className={styles.content_title}>{props.contentTitle}</h1>
      </div> : <h1 className={styles.content_title}>{props.contentTitle}</h1>}
      <div className={styles.raw_content}>
        {props._rawContent && <PortableText blocks={props._rawContent} />}
      </div>
      <div className={styles.raw_content}>
        {props._rawContent2 && <PortableText blocks={props._rawContent2} />}
      </div>
      <div className={styles.raw_content}>
        {props._rawContent3 && <PortableText blocks={props._rawContent3} />}
      </div>
      <div className={styles.raw_content}>
        {props._rawContent4 && <PortableText blocks={props._rawContent4} />}
      </div>
      <div className={styles.raw_content}>
        {props._rawContent5 && <PortableText blocks={props._rawContent5} />}
      </div>
    </>
  );
};

export default ContentPage;
