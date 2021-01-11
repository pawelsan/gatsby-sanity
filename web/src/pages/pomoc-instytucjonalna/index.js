import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styles from "../pages.module.css";
import logo_orange from "../../images/logo_orange.png";

const Disabled = () => (
  <Layout>
    <SEO title="Pomoc instytucjonalna" />
    <div className={styles.page_header}>
      <div>
        <img src={logo_orange} alt="Pomarańczowa część loga PCPR" />
      </div>
      <h1>Pomoc instytucjonalna</h1>
    </div>
    <p>Prosimy o przejście do jednej z następujących stron:</p>
    <Link to="domy-pomocy-spolecznej">
      <div>Domy Pomocy Społecznej</div>
    </Link>
    <Link to="srodowiskowe-domy-samopomocy">
      <div>Środowiskowe Domy Samopomocy</div>
    </Link>
    <Link to="warsztaty-terapii-zajeciowej">
      <div>Warsztaty Terapii Zajęciowej</div>
    </Link>
  </Layout>
);

export default Disabled;
