async function createTaskOfPCPRPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTasksOfPcpr {
        edges {
          node {
            category {
              slug {
                current
              }
              title
            }
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const contentEdges = (result.data.allSanityTasksOfPcpr || {}).edges || [];

  contentEdges.forEach((edge) => {
    const { category, id, slug = {} } = edge.node;
    const path = `/${category.slug.current}/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("../src/templates/task-of-PCPR.js"),
      context: { id },
    });
  });
}

module.exports = createTaskOfPCPRPages;
