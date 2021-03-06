import React from "react";
import { graphql } from "gatsby";
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
import NewsNavigationLink from "../components/news/news-navigation-link";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./index.module.css";

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
      mainImage {
        ...SanityImage
        alt
      }
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

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <NewsBannerContainer postNodes={pinnedPostNodes} />
      {site.mainImage && site.mainImage.asset && (
        <div className={styles.photo_title}>
          <img
            src={imageUrlFor(buildImageObj(site.mainImage))
              .height(300)
              .fit("crop")
              .auto("format")
              .url()}
            alt={site.mainImage.alt}
          />
          <h1>{site.subtitle}</h1>
        </div>
      )}
      <h2>Aktualności</h2>
      <NewsPostPreviewContainer postNodes={postNodes} />
      <div className={styles.archive_navigation}>
        <NewsNavigationLink to="/aktualnosci" rel={null} text="Pozostałe wiadomości" />
      </div>
    </Layout>
  );
};

export default IndexPage;
