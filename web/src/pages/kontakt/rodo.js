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
      _rawContent
      _rawContent2
      _rawContent3
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

  const { _rawContent, _rawContent2, _rawContent3, contentTitle, pageName } = gdpr

  if (!gdpr) {
    throw new Error(
      `Brak treści na stronie "${pageName}". Otwórz panel administratora i dodaj treść do "${pageName}".`
    )
  }

  return (
    <Layout>
      <SEO title={contentTitle} />
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
    </Layout>
  )
}

export default GDPR