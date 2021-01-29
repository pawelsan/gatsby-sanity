import React, { useState } from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import NewsPostPreview from "../components/news/news-post-preview";
import Pagination from "../components/news/pagination";
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

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  // news posts pagination logic
  const [currentSelection, setCurrentSelection] = useState(1);
  const [newsPerSelection] = useState(6);
  const indexOfLastNews = currentSelection * newsPerSelection;
  const indexOfFirstNews = indexOfLastNews - newsPerSelection;
  const newsToBeShownPerSelection = postNodes && postNodes.slice(indexOfFirstNews, indexOfLastNews);
  const paginate = (selectionNumber) => {
    setCurrentSelection(selectionNumber)
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div className={styles.photo_title}>
        <img src={photo_title} alt="Zdjęcie dzieci w parku" />
        <h1>{site.subtitle}</h1>
      </div>
      <ul className={styles.post_container}>
        {newsToBeShownPerSelection &&
          newsToBeShownPerSelection.map((node) => (
            <li key={node.id}>
              <NewsPostPreview {...node} />
            </li>
          ))}
      </ul>
      <Pagination newsPerSelection={newsPerSelection} totalNews={postNodes.length} paginate={paginate} />
      {/* {postNodes && (
        <NewsPostPreview
          nodes={postNodes}
        />
      )} */}
    </Layout>
  );
};

export default IndexPage;
