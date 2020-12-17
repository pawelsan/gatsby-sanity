async function createTaskOfPCPRPages(graphql, actions) {
    const { createPage } = actions
    const result = await graphql(`
      {
        allSanityTasksOfPcpr {
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

    const contentEdges = (result.data.allSanityTasksOfPcpr || {}).edges || []

    contentEdges
        .forEach(edge => {
            const { id, slug = {} } = edge.node
            const path = `/${slug.current}/`

            createPage({
                path,
                component: require.resolve('../src/templates/task-of-PCPR.js'),
                context: { id }
            })
        })
}

module.exports = createTaskOfPCPRPages