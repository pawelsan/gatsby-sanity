import React from "react";
import PortableText from "../portableText";
import Container from "../container";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import styles from "./content-page.module.css";

const ContentPage = (props) => {
  // let applicablePuzzle;
  // let altText;
  // let taskCategory = props.category ? props.category.slug.current : false
  // const logoMap = {
  //   "orange": logo_orange,
  //   "blue": logo_blue,
  //   "green": logo_green,
  //   "red": logo_red
  // }
  // console.log(props)

  // switch (taskCategory) {
  //   case "pomoc-spoleczna":
  //     applicablePuzzle = "orange";
  //     altText = "Pomarańczowa część loga PCPR"
  //     break;
  //   case "piecza-zastepcza":
  //     applicablePuzzle = "blue";
  //     altText = "Niebieska część loga PCPR"
  //     break;
  //   case "rehabilitacja-spoleczna":
  //     applicablePuzzle = "green";
  //     altText = "Zielona część loga PCPR"
  //     break;
  //   case false:
  //     break;
  //   default:
  //     applicablePuzzle = "red";
  //     altText = "Czerwona część loga PCPR"
  // }
  return (
    <>
      {props.category ? <div className={styles.page_header}>
        {/* <div>
          <img src={logoMap[applicablePuzzle]} alt={altText} />
        </div> */}
        {props.mainImage && props.mainImage.asset && (
          <div className={styles.main_image}>
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                // .width(150)
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
