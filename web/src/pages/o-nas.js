import React from "react";
// import { graphql } from 'gatsby'
// import { mapEdgesToNodes } from '../lib/helpers'
// import BlogPostPreviewGrid from '../components/news/news-post-preview-grid'
// import GraphQLErrorList from '../components/graphql-error-list'
import SEO from "../components/seo";
import Layout from "../containers/layout";
import styles from "./pages.module.css";
import logo_red from "../images/logo_red.png";

// export const query = graphql`
//   query ArchivePageQuery {
//     posts: allSanityPost(
//       sort: { fields: [publishedAt], order: DESC }
//       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//       ) {
//       edges {
//         node {
//           id
//           publishedAt
//           mainImage {
//             ...SanityImage
//             alt
//           }
//           title
//           _rawExcerpt
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `

const About = (props) => {
  //   const { data, errors } = props

  //   if (errors) {
  //     return (
  //       <Layout>
  //         <GraphQLErrorList errors={errors} />
  //       </Layout>
  //     )
  //   }

  //   const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title="Informacje ogólne" />
      <div className={styles.page_header}>
        <div>
          <img src={logo_red} alt="Czerwona część loga PCPR" />
        </div>
        <h1>O PCPR</h1>
      </div>
      <p>Powiatowe Centrum Pomocy Rodzinie sprawuję wszechstronne funkcje pomocy</p>
    </Layout>
  );
};

export default About;
