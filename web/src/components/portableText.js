import React from 'react'
import clientConfig from '../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import { imageUrlFor } from '../lib/image-url'
import styles from '../pages/pages.module.css'

const serializer = {
  types: {
    mainImage: props => {
      return (
        <figure className={styles.figure}>
          <img src={imageUrlFor(props.node.asset).fit("scale").url()} alt={props.node.all} />
          <figcaption>{props.node.caption}</figcaption>
        </figure>
      )
    }
  }
}

const PortableText = ({ blocks }) => {
  console.log(blocks)
  return (
    <BasePortableText blocks={blocks} {...clientConfig.sanity} serializers={serializer} />
  )
}

// const PortableText = ({ blocks }) => (
//   <BasePortableText blocks={blocks} {...clientConfig.sanity} />
// )

export default PortableText
