const { isFuture } = require('date-fns')

const { format } = require('date-fns')

async function createBlogPostPages(graphql, actions) {
    const { createPage } = actions
    const result = await graphql(`
      {
        allSanityNews {
          edges {
            node {
              id
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

    const postEdges = (result.data.allSanityNews || {}).edges || []

    postEdges
        .filter(edge => !isFuture(edge.node.publishedAt))
        .forEach((edge, index) => {
            const { id, slug = {}, publishedAt } = edge.node
            const dateSegment = format(publishedAt, 'DD/MM/YYYY')
            const path = `/aktualnosci/${dateSegment}/${slug.current}/`

            createPage({
                path,
                component: require.resolve('../src/templates/news.js'),
                context: { id }
            })
        })
}

module.exports = createBlogPostPages