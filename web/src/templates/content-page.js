import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import ContentPage from "../components/content/content-page";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query ContentPageQuery($id: String!) {
    content: sanityPageContent(id: {eq: $id}) {
      _id
      _rawContent
      _rawContent2
      _rawContent3
      contentTitle
      pageName
      slug {
        current
      }
    }
  }
`;

const ContentPageTemplate = (props) => {
  const { data, errors } = props;
  const content = data && data.content;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  if (!content) {
    throw new Error(
      `Brak treści na stronie ${content.pageName}.`
    )
  }

  return (
    <Layout>
      <SEO
        title={content.pageName || "Untitled"}
      // description={toPlainText(news._rawExcerpt)}
      />
      <ContentPage {...content} />
    </Layout>
  );
};

export default ContentPageTemplate;
