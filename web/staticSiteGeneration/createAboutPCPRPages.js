async function createAboutfPCPRPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
        {
            allSanityAboutPcpr {
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

  const contentEdges = (result.data.allSanityAboutPcpr || {}).edges || []

  contentEdges
    .forEach(edge => {
      const { id, slug = {} } = edge.node
      const path = `/${slug.current}/`

      createPage({
        path,
        component: require.resolve('../src/templates/about-PCPR.js'),
        context: { id }
      })
    })
}

module.exports = createAboutfPCPRPages