import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GraphQLErrorList from '../../components/graphql-error-list'

export const query = graphql`

query GDPRQuery {
    gdpr:   sanityGdpr {
        conditions {
          children {
            text
          }
        }
        ending {
          children {
            text
          }
        }
        entryIntoForce
        intro {
          children {
            text
          }
        }
        rights {
          children {
            text
          }
        }
        signature
        title
      }
}
`


const GDPR = props => {
    const { data, errors } = props

    if (errors) {
        return (
            <Layout>
                <GraphQLErrorList errors={errors} />
            </Layout>
        )
    }

    const gdpr = (data || {}).gdpr

    if (!gdpr) {
        throw new Error(
            'Missing "RODO". Open the studio at http://localhost:3333 and add some content to "RODO" and restart the development server.'
        )
    }
    console.log(gdpr.intro)
    return (
        <Layout>
            <SEO title='Klauzula informacyjna dotycząca RODO' />
            <h1>{gdpr.title}</h1>
            <div>
                <p>{gdpr.intro[0].children[0].text}</p>
            </div>
        </Layout>
    )
}

export default GDPR