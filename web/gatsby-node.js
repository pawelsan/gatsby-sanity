/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createTasksOfPCPRPages = require("./staticSiteGeneration/createTasksOfPCPRPages");
const createAboutfPCPRPages = require("./staticSiteGeneration/createAboutPCPRPages");
const createContactPages = require("./staticSiteGeneration/createContactPages");
const createCooperationPages = require("./staticSiteGeneration/createCooperationPages");
const createProjectsPages = require("./staticSiteGeneration/createProjectsPages");
const createNewsListPages = require("./staticSiteGeneration/createNewsListPages");
const createNewsPages = require("./staticSiteGeneration/createNewsPages");


exports.createPages = async ({ graphql, actions }) => {
  await createNewsPages(graphql, actions);
  await createTasksOfPCPRPages(graphql, actions);
  await createAboutfPCPRPages(graphql, actions);
  await createContactPages(graphql, actions);
  await createCooperationPages(graphql, actions);
  await createProjectsPages(graphql, actions);
  await createNewsListPages(graphql, actions);
  await createNewsPages(graphql, actions);
};
