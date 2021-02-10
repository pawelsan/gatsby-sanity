import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import ContentPage from "../components/content/content-page";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query contactQuery($id: String!) {
    content: sanityContact(id: { eq: $id }) {
      _id
      _rawContent(resolveReferences: { maxDepth: 5 })
      _rawContent2(resolveReferences: { maxDepth: 5 })
      _rawContent3(resolveReferences: { maxDepth: 5 })
      contentTitle
      pageName
      slug {
        current
      }
    }
  }
`;

const ContactTemplate = (props) => {
  const { data, errors } = props;
  const content = data && data.content;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  if (!content) {
    throw new Error(`Brak treści na stronie ${content.pageName}.`);
  }

  return (
    <Layout>
      <SEO
        title={content.pageName || "Untitled"}
      />
      <ContentPage {...content} />
    </Layout>
  );
};

export default ContactTemplate;