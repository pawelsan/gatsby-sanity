import React from "react";
import { graphql, Link } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import NewsPostPreviewContainer from "../components/news/news-post-preview-container";
import NewsBannerContainer from "../components/news/news-banner-container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import photo_title from "../images/photo_title.png";

import styles from "./pages.module.css";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      subtitle
      description
      keywords
    }
    news: allSanityNews(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      limit: 6
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          switch
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).news
    ? mapEdgesToNodes(data.news)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : [];
  const pinnedPostNodes = postNodes.filter(node => node.switch === true)
  console.log(pinnedPostNodes)

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <NewsBannerContainer postNodes={pinnedPostNodes} />
      <div className={styles.photo_title}>
        <img src={photo_title} alt="Zdjęcie dzieci w parku" />
        <h1>{site.subtitle}</h1>
      </div>
      <NewsPostPreviewContainer postNodes={postNodes} />
      <Link to="/aktualnosci">Wszystkie wiadomości</Link>
    </Layout>
  );
};

export default IndexPage;
