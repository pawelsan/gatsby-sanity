import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
// import NewsPost from "../components/news/news-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query ContentPageQuery($id: String!) {
    content: sanityPageContent(id: {eq: $id}) {
      _id
      _rawContents
      contentTitle
      pageName
      slug {
        current
      }
    }
  }
`;

const ContentPageTemplate = (props) => {
  console.log(props);
  const { data, errors } = props;
  const content = data && data.content;
  const { contentTitle, _rawContents } = content;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {content && (
        <SEO
          title={content.contentTitle || "Untitled"}
        // description={toPlainText(news._rawExcerpt)}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {
        content && (
          <Container>
            <div>
              <div>
                <h1>{contentTitle}</h1>
                {_rawContents && <PortableText blocks={_rawContents} />}
              </div>
            </div>
          </Container>
        )

        //   <NewsPost {...news} />
      }
    </Layout>
  );
};

export default ContentPageTemplate;
