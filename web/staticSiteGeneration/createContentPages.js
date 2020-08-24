async function createContentPages(graphql, actions) {
    const { createPage } = actions
    const result = await graphql(`
      {
        allSanityPageContent {
            edges {
              node {
                id
                slug {
                  current
                }
              }
            }
        }
      }
    `)



    if (result.errors) throw result.errors

    const contentEdges = (result.data.allSanityPageContent || {}).edges || []

    contentEdges
        .forEach(edge => {
            const { id, slug = {} } = edge.node
            const path = `/autokontakt/${slug.current}/`

            createPage({
                path,
                component: require.resolve('../src/templates/content-page.js'),
                context: { id }
            })
        })
}

module.exports = createContentPages