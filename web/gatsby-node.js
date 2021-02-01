/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");
const createBlogPostPages = require("./staticSiteGeneration/createBlogPostPages");
const createContentPages = require("./staticSiteGeneration/createContentPages");
const createTasksOfPCPRPages = require("./staticSiteGeneration/createTasksOfPCPRPages");
const createAboutfPCPRPages = require("./staticSiteGeneration/createAboutPCPRPages");
const createContactPages = require("./staticSiteGeneration/createContactPages");
const createCooperationPages = require("./staticSiteGeneration/createCooperationPages");
const createProjectsPages = require("./staticSiteGeneration/createProjectsPages");

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
    const { id, slug = {}, publishedAt } = edge.node;
    const dateSegment = format(publishedAt, "DD/MM/YYYY");
    const path = `/aktualnosci/${dateSegment}/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/news.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
  await createContentPages(graphql, actions);
  await createNewsPages(graphql, actions);
  await createTasksOfPCPRPages(graphql, actions);
  await createAboutfPCPRPages(graphql, actions);
  await createContactPages(graphql, actions);
  await createCooperationPages(graphql, actions);
  await createProjectsPages(graphql, actions);
};
