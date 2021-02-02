async function createCooperationPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
      {
        allSanityCooperation {
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

  const contentEdges = (result.data.allSanityCooperation || {}).edges || [];

  contentEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("../src/templates/cooperation.js"),
      context: { id },
    });
  });
}

module.exports = createCooperationPages;
