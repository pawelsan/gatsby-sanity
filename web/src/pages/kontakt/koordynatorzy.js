import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GraphQLErrorList from '../../components/graphql-error-list'
import PortableText from '../../components/portableText'

import styles from '../pages.module.css'

export const query = graphql`

query CoordinatorQuery {
    coordinators: sanityPageContent(pageName: {eq: "Koordynatorzy"}) {
        id
        pageName
        contentTitle
        _rawContent
        _rawContent2
        _rawContent3
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

    const coordinators = (data || {}).coordinators

    const { _rawContent, _rawContent2, _rawContent3, contentTitle, pageName } = coordinators

    if (!coordinators) {
        throw new Error(
            'Missing "Koordynatorzy". Open the studio at http://localhost:3333 and add some content to "Koordynatorzy" and restart the development server.'
        )
    }

    return (
        < Layout >
            <SEO title='Koordyantorzy pieczy zastępczej' />
            <h1 className={styles.content_title}>{contentTitle}</h1>
            <div className={styles.raw_content}>
                {_rawContent && <PortableText blocks={_rawContent} />}
            </div>
            <div className={styles.raw_content}>
                {_rawContent2 && <PortableText blocks={_rawContent2} />}
            </div>
            <div className={styles.raw_content}>
                {_rawContent3 && <PortableText blocks={_rawContent3} />}
            </div>
        </Layout >
    )
}

export default Coordinators