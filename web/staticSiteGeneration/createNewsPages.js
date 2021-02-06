async function createNewsPages(graphql, actions) {
    const { createPage } = actions;
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
    `);

    if (result.errors) throw result.errors;

    const newsEdges = (result.data.allSanityNews || {}).edges || [];

    newsEdges.forEach((edge, index) => {
        const previous = index === newsEdges.length - 1 ? null : newsEdges[index + 1].node
        const next = index === 0 ? null : newsEdges[index - 1].node
        const { id, slug = {} } = edge.node;
        const path = `/aktualnosci/${slug.current}/`;

        createPage({
            path,
            component: require.resolve("../src/templates/news.js"),
            context: {
                id,
                previous,
                next,
            },
        });
    });
};

module.exports = createNewsPages;