import React from "react";
import { graphql, Link } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import NewsPostPreviewContainer from "../components/news/news-post-preview-container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";

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

const NewsLsitPage = (props) => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const { data, errors } = props;

  if (errors) {
    return (
      <Container>
        <GraphQLErrorList errors={errors} />
      </Container>
    );
  }

  const postNodes = (data || {}).news
    ? mapEdgesToNodes(data.news)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout>
      <SEO title="Aktualności" description="Lista aktualności" />
      {postNodes && <NewsPostPreviewContainer postNodes={postNodes} />}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {!isFirst && (
          <Link to={`/aktualnosci/${prevPage}`} rel="prev" style={{ display: "block" }}>
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link key={`pagination-number${i + 1}`} to={`/aktualnosci/${i === 0 ? "" : i + 1}`} style={{ display: "block" }}>
            {i + 1}
          </Link>
        ))}
        {!isLast && (
          <Link to={`/aktualnosci/${nextPage}`} rel="next" style={{ display: "block" }}>
            Next Page →
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default NewsLsitPage;