import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Strona o podanym adresie nie istnieje</h1>
    <Link to="/">Powrót na stronę główną</Link>
  </Layout>
);

export default NotFoundPage;
