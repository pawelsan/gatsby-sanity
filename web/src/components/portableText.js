import React from 'react'
import clientConfig from '../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import { imageUrlFor } from '../lib/image-url'

const serializer = {
  types: {
    mainImage: props => {
      console.log(props)
      return (
        <figure>
          <img src={imageUrlFor(props.node.asset).width(200).url()} alt={props.node.all} />
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
