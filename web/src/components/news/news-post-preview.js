import { format } from 'date-fns'
import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getNewsUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import PortableText from '../portableText'

import styles from "./news-post-preview.module.css"

function NewsPostPreview(props) {
  console.log(props)
  return (
    <Link
      to={getNewsUrl(props.publishedAt, props.slug.current)}
      className={styles.post_link}
    >
      <div className={styles.post}>
        <h3 className={styles.post_title}>{props.title}</h3>
        <div className={styles.post_date}>{format(props.publishedAt, 'DD.MM.YYYY')}</div>
        <div>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(100)
                .height(100)
                .auto('format')
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        {props._rawExcerpt && (
          <div className={styles.post_content}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>


    </Link>
  )
}

export default NewsPostPreview
