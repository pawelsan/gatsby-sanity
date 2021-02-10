import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import NewsPostPreviewContainer from "../components/news/news-post-preview-container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import NewsListPagination from "../components/news/news-list-pagination"

export const query = graphql`
  query NewsListTemplateQuery($skip: Int!, $limit: Int!) {
    news: allSanityNews(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      limit: $limit
      skip: $skip
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

const NewsLsitPage = ({ data, errors, pageContext }) => {

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).news
    ? mapEdgesToNodes(data.news)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : [];

  postNodes.splice(0, 6)

  return (
    <Layout>
      <SEO title="Starsze wiadomości" description="Lista aktualności" />
      <h2>Starsze wiadomości</h2>
      {postNodes && <NewsPostPreviewContainer postNodes={postNodes} />}
      <NewsListPagination {...pageContext} />
    </Layout>
  );
};

export default NewsLsitPage;