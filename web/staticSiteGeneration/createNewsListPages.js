async function createNewsListPages(graphql, actions) {
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
    const newsPerPage = 3;
    const numPages = Math.ceil(newsEdges.length / newsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/aktualnosci/` : `aktualnosci/${i + 1}`,
            component: require.resolve('../src/templates/news-list.js'),
            context: {
                limit: newsPerPage,
                skip: i * newsPerPage,
                numPages,
                currentPage: i + 1
            },
        });
    })
}

module.exports = createNewsListPages;
