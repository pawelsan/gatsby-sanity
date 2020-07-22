import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GraphQLErrorList from '../../components/graphql-error-list'

export const query = graphql`

query CoordinatorQuery {
    coordinators: allSanityCoordinator {
        edges {
          node {
            lastName
            firstName
            phone
          }
        }
    }
}
`

const Coordinators = props => {
    const { data, errors } = props

    if (errors) {
        return (
            <Layout>
                <GraphQLErrorList errors={errors} />
            </Layout>
        )
    }

    const coordinators = (data || {}).coordinators.edges

    if (!coordinators) {
        throw new Error(
            'Missing "Koordynatorzy". Open the studio at http://localhost:3333 and add some content to "Koordynatorzy" and restart the development server.'
        )
    }

    return (
        < Layout >
            <SEO title='Koordyantorzy pieczy zastępczej' />
            <h1>Koordyantorzy pieczy zastępczej</h1>
            <ul>
                {coordinators &&
                    coordinators.map(coordinator => (
                        <li key={coordinator.node.lastName}>
                            {coordinator.node.firstName} {coordinator.node.lastName} <span>- tel. {coordinator.node.phone}</span>
                        </li>
                    ))}
            </ul>
        </Layout >
    )
}

export default Coordinators