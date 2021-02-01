async function createContactPages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
      {
        allSanityContact {
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

    const contentEdges = (result.data.allSanityContact || {}).edges || [];

    contentEdges.forEach((edge) => {
        const { id, slug = {} } = edge.node;
        const path = `/${slug.current}/`;

        createPage({
            path,
            component: require.resolve("../src/templates/contact.js"),
            context: { id },
        });
    });
}

module.exports = createContactPages;
