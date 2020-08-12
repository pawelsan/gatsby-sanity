
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require('date-fns')
const createBlogPostPages = require('./staticSiteGeneration/createBlogPostPages')


async function createNewsPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
  {
    allSanityNews {
      edges {
        node {
          _id
          publishedAt
          slug {
            current
          }
        }
      }
    }
  }
  `)



  if (result.errors) throw result.errors

  const newsEdges = (result.data.allSanityNews || {}).edges || []

  newsEdges
    .forEach((edge, index) => {
      const { _id, slug = {}, publishedAt } = edge.node
      const dateSegment = format(publishedAt, 'DD/MM/YYYY')
      const path = `/aktualnosci/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/news.js'),
        context: { id: _id }
      })
    })
}


exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions)
  await createNewsPages(graphql, actions)
}
