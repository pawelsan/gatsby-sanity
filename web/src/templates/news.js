import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import NewsPost from "../components/news/news-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query NewsTemplateQuery($id: String!) {
    news: sanityNews(id: { eq: $id }) {
      id
      publishedAt
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const NewsTemplate = (props) => {
  const { data, errors, pageContext } = props;
  const news = data && data.news;

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {news && (
        <SEO
          title={news.title || "Untitled"}
          description={toPlainText(news._rawExcerpt)}
          image={news.mainImage}
        />
      )}
      {errors && (<GraphQLErrorList errors={errors} />)}
      {news && <NewsPost {...news} {...pageContext} />}
    </Layout>
  );
};

export default NewsTemplate;
