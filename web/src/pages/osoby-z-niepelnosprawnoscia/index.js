import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styles from "../pages.module.css";
import logo_green from "../../images/logo_green.png";

const Disabled = () => (
  <Layout>
    <SEO title="Osoby z niepełnosprawnością" />
    <div className={styles.page_header}>
      <div>
        <img src={logo_green} alt="Zielona część loga PCPR" />
      </div>
      <h1>Osoby z niepełnosprawnością</h1>
    </div>
    <p>Prosimy o przejście do jednej z następujących stron:</p>
    <Link to="rehabilitacja-spoleczna">
      <div>Rehabilitacja społeczna</div>
    </Link>
    <Link to="aktywny-samorzad">
      <div>Aktywny samorząd</div>
    </Link>
  </Layout>
);

export default Disabled;
