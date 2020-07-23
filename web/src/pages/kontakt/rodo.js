import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GraphQLErrorList from '../../components/graphql-error-list'
import PortableText from '../../components/portableText'

import styles from '../pages.module.css'

export const query = graphql`

query GDPRQuery {
    gdpr: sanityPageContent(pageName: {eq: "RODO"}) {
      pageName
      contentTitle
      _id
      _rawContent(resolveReferences: {maxDepth: 10})
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
  console.log(gdpr)

  const { _rawContent, contentTitle, pageName } = gdpr

  if (!gdpr) {
    throw new Error(
      `Brak treści na stronie "${pageName}". Otwórz panel administratora i dodaj treść do "${pageName}".`
    )
  }

  return (
    <Layout>
      <SEO title={contentTitle} />
      <h1>{contentTitle}</h1>
      <div className={styles.gdpr}>
        {_rawContent && <PortableText blocks={_rawContent} />}
      </div>
    </Layout>
  )
}

export default GDPR