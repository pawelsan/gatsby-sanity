async function createProjectsPages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
      {
        allSanityProjects {
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
    `);

    if (result.errors) throw result.errors;

    const contentEdges = (result.data.allSanityProjects || {}).edges || [];

    contentEdges.forEach((edge) => {
        const { id, slug = {} } = edge.node;
        const path = `/${slug.current}/`;

        createPage({
            path,
            component: require.resolve("../src/templates/projects.js"),
            context: { id },
        });
    });
}

module.exports = createProjectsPages;
