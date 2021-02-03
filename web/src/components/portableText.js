import React from "react";
import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";
import styles from "./portableText.module.css";

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
    internalLink: ({ mark, children }) => {
      console.log(mark.item._ref)
      const { slug = {} } = mark
      const href = `/${slug.current}`
      return <a href={href}>{children}</a>
    }
  },
  types: {
    mainImage: ({ node }) => {
      return (
        <figure className={styles.figure}>
          <img
            src={imageUrlFor(buildImageObj(node))
              // .maxWidth(500)
              .height(400)
              .fit("crop")
              .auto("format")
              .url()}
            alt={node.alt}
          />
          {/* <img src={imageUrlFor(node.asset).fit("scale").url()} alt={node.alt} /> */}
          <figcaption>{node.caption}</figcaption>
        </figure>
      );
    },
    fileDocument: (props) => {
      return (
        <span><span className={styles.file_description}>{props.node.description}</span>{" "}jest do pobrania pod następującym{" "}<a href={`${props.node.asset.url}?dl=`}>linkiem</a>.</span>
      )
    },
    dataTable: (props) => {
      const data = props.node.table.rows;
      const content = data.map((row, index) =>
        <tr className={styles.table_row} key={index}>{row.cells.map((cell, index) => <td key={index}>{cell}</td>)}</tr>
      );

      return (
        <table className={styles.table}><tbody className={styles.table_body}>{content}</tbody></table>
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
