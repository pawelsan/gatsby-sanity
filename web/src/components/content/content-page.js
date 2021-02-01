import React from "react";
import PortableText from "../portableText";
import Container from "../container";
import logo_blue from "../../images/logo_blue.png";
import logo_green from "../../images/logo_green.png";
import logo_orange from "../../images/logo_orange.png";
import logo_red from "../../images/logo_red.png";
import styles from "./content-page.module.css";

const ContentPage = ({ _rawContent, _rawContent2, _rawContent3, contentTitle, category }) => {
  let applicablePuzzle;
  let altText;
  let taskCategory = category ? category.slug.current : false
  const logoMap = {
    "orange": logo_orange,
    "blue": logo_blue,
    "green": logo_green,
    "red": logo_red
  }
  console.log(logoMap["green"])

  switch (taskCategory) {
    case "pomoc-spoleczna":
      applicablePuzzle = "orange";
      altText = "Pomarańczowa część loga PCPR"
      break;
    case "piecza-zastepcza":
      applicablePuzzle = "blue";
      altText = "Niebieska część loga PCPR"
      break;
    case "rehabilitacja-spoleczna":
      applicablePuzzle = "green";
      altText = "Zielona część loga PCPR"
      break;
    case false:
      break;
    default:
      applicablePuzzle = "red";
      altText = "Czerwona część loga PCPR"
  }
  return (
    <>
      {category ? <div className={styles.page_header}>
        <div>
          <img src={logoMap[applicablePuzzle]} alt={altText} />
        </div>
        <h1 className={styles.content_title}>{contentTitle}</h1>
      </div> : <h1 className={styles.content_title}>{contentTitle}</h1>}
      <div className={styles.raw_content}>
        {_rawContent && <PortableText blocks={_rawContent} />}
      </div>
      <div className={styles.raw_content}>
        {_rawContent2 && <PortableText blocks={_rawContent2} />}
      </div>
      <div className={styles.raw_content}>
        {_rawContent3 && <PortableText blocks={_rawContent3} />}
      </div>
      <div className={styles.raw_content}>
        {_rawContent4 && <PortableText blocks={_rawContent4} />}
      </div>
      <div className={styles.raw_content}>
        {_rawContent5 && <PortableText blocks={_rawContent5} />}
      </div>
    </>
  );
};

export default ContentPage;
