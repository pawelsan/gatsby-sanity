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
        }
      `)
  return (
    data
  )
}

export default dropdownItemsQuery;