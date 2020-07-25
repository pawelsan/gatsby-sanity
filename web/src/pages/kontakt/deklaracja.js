import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GraphQLErrorList from '../../components/graphql-error-list'
import PortableText from '../../components/portableText'
import styles from '../pages.module.css'

export const query = graphql`

query DeclarationQuery {
    declaration: sanityPageContent(pageName: {eq: "Deklaracja"}) {
      pageName
      contentTitle
      _id
      _rawContent
      _rawContent2
      _rawContent3
    }
}
`


const Declaration = props => {
    console.log(props)
    const { data, errors } = props

    if (errors) {
        return (
            <Layout>
                <GraphQLErrorList errors={errors} />
            </Layout>
        )
    }

    const declaration = (data || {}).declaration

    const { _rawContent, _rawContent2, _rawContent3, contentTitle, pageName } = declaration

    if (!declaration) {
        throw new Error(
            `Brak treści na stronie "${pageName}". Otwórz panel administratora i dodaj treść do "${pageName}".`
        )
    }
    return (
        <Layout>
            <SEO title='Deklaracja dostępności' />
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

export default Declaration