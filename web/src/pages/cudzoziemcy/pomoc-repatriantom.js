import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styles from "../pages.module.css";
import logo_blue from "../../images/logo_blue.png";

const Repatriation = () => (
  <Layout>
    <SEO title="Pomoc Repatriantom" />
    <div className={styles.page_header}>
      <div>
        <img src={logo_blue} alt="Niebieska część loga PCPR" />
      </div>
      <h1>Pomoc Repatriantom</h1>
    </div>
    <p>Strona o pomocy repatriantom</p>
  </Layout>
);

export default Repatriation;
