import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styles from "../pages.module.css";
import logo_red from "../../images/logo_red.png";

const FosterCare = () => (
  <Layout>
    <SEO title="Piecza zastępcza" />
    <div className={styles.page_header}>
      <div>
        <img src={logo_red} alt="Czerwona część loga PCPR" />
      </div>
      <h1>Piecza zastępcza</h1>
    </div>
    <p>Prosimy o przejście do jednej z następujących stron:</p>
    <Link to="rodziny-rdd">
      <div>Rodziny zastępcze i rodzinne domy dziecka</div>
    </Link>
    <Link to="wychowankowie">
      <div>Usamodzielnieni wychowankowie</div>
    </Link>
    <Link to="rodzice">
      <div>Rodzice dzieci w pieczy zastępczej</div>
    </Link>
  </Layout>
);

export default FosterCare;
