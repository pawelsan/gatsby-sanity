import React from 'react'
// import { graphql } from 'gatsby'
// import { mapEdgesToNodes } from '../lib/helpers'
// import BlogPostPreviewGrid from '../components/news/news-post-preview-grid'
// import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

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

const About = props => {
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
      <SEO title='O PCPR' />
      <h1>O PCPR</h1>
      <p>Powiatowe Centrum Pomocy Rodzinie sprawuję wszechstronne funkcje pomocy</p>
    </Layout>
  )
}

export default About
