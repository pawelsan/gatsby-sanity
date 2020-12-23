import { useStaticQuery, graphql } from "gatsby";

// Data extracted from the Sainity Studio
export const dropdownItemsQuery = () => {
  const data = useStaticQuery(graphql`
      query dropdownItemsQuery {
        allSanityTasksOfPcpr {
          edges {
            node {
              categories {
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