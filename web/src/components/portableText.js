import React from "react";
import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import { imageUrlFor } from "../lib/image-url";
import styles from "../pages/pages.module.css";

const serializer = {
  marks: {
    link: ({ children, mark }) =>
      mark.blank ? (
        <a href={mark.href} target="_blank" rel="noopener noreferer">
          {children}
        </a>
      ) : (
          <a href={mark.href}>{children}</a>
        ),
  },
  types: {
    mainImage: (props) => {
      return (
        <figure className={styles.figure}>
          <img src={imageUrlFor(props.node.asset).fit("scale").url()} alt={props.node.alt} />
          <figcaption>{props.node.caption}</figcaption>
        </figure>
      );
    },
    fileDocument: (props) => {
      return (
        <>
          <span><b>{props.node.description}</b> można pobrać klikając{" "}<a href={`${props.node.asset.url}?dl=`}>tutaj</a>.</span>
        </>
      )
    }
  },
};

const PortableText = ({ blocks }) => {
  return <BasePortableText blocks={blocks} {...clientConfig.sanity} serializers={serializer} />;
};

// const PortableText = ({ blocks }) => (
//   <BasePortableText blocks={blocks} {...clientConfig.sanity} />
// )

export default PortableText;
