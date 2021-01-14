import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styles from "../pages.module.css";
import logo_red from "../../images/logo_red.png";

const FosterFamilies = () => (
  <Layout>
    <SEO title="Rodziny zastępcze i Rodzinne Domy Dziecka" />
    <div className={styles.page_header}>
      <div>
        <img src={logo_red} alt="Czerwona część loga PCPR" />
      </div>
      <h1>Rodziny zastępcze i Rodzinne Domy Dziecka</h1>
    </div>
    <p>Strona o rodzinach zastępczych i Rodzinnych Domach Dziecka</p>
  </Layout>
);

export default FosterFamilies;
