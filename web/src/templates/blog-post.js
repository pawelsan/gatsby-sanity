import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import NewsPost from '../components/news/news-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { toPlainText } from '../lib/helpers'

export const query = graphql`
  query NewsPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      
    }
  }
`

const NewsPostTemplate = props => {
  console.log(props.data)
  const { data, errors } = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <NewsPost {...post} />}
    </Layout>
  )
}

export default NewsPostTemplate
