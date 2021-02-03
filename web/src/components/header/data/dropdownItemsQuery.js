import { useStaticQuery, graphql } from "gatsby";

// Data extracted from the Sainity Studio
const dropdownItemsQuery = () => {
  const data = useStaticQuery(graphql`
    query dropdownItemsQuery {
      allSanityTasksOfPcpr {
        edges {
          node {
            category {
              slug {
                current
              }
              title
            }
            pageName
            slug {
              current
            }
            order
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
            order
          }
        }
      }
      allSanityAboutPcpr {
        edges {
          node {
            pageName
            slug {
              current
            }
            order
          }
        }
      }
      allSanityProjects {
        edges {
          node {
            pageName
            slug {
              current
            }
            order
          }
        }
      }
      allSanityCooperation {
        edges {
          node {
            pageName
            slug {
              current
            }
            order
          }
        }
      }
      allSanityContact {
        edges {
          node {
            pageName
            slug {
              current
            }
            order
          }
        }
      }
    }
  `);
  return data;
};

export default dropdownItemsQuery;
