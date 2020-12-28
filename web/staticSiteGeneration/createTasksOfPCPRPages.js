async function createTaskOfPCPRPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
      {
        allSanityTasksOfPcpr {
            edges {
              node {
                categories {
                  title
                }
                id
                slug {
                  current
                }
              }
            }
        }
        allSanityCategory {
          edges {
            node {
              title
              slug {
                current
              }
            }
          }
        }
      }
    `)



  if (result.errors) throw result.errors

  const contentEdges = (result.data.allSanityTasksOfPcpr || {}).edges || [];
  const contentCategories = (result.data.allSanityCategory || {}).edges || [];
  let taskCategories = [];
  contentCategories.map(category => taskCategories.push(category.node));

  contentEdges
    .forEach(edge => {
      const { categories, id, slug = {} } = edge.node
      const category = taskCategories.filter(category => category.title === categories[0].title)
      const path = `/${category[0].slug.current}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('../src/templates/task-of-PCPR.js'),
        context: { id }
      })
    })
}

module.exports = createTaskOfPCPRPages