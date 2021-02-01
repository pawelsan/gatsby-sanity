import React from "react";
import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import { imageUrlFor } from "../lib/image-url";
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
        <span><b>{props.node.description}</b> można pobrać klikając{" "}<a href={`${props.node.asset.url}?dl=`}>tutaj</a>.</span>
      )
    },
    dataTable: (props) => {
      console.log(props)
      const data = props.node.table.rows;
      const tableHeaderItems = data[0].cells;
      const tableContentItems = data.slice(1);
      console.log(tableContentItems);
      const header = <tr className={styles.table_header}>{tableHeaderItems.map((item, index) =>
        <th key={index}>{item}</th>
      )}</tr>
      const content = tableContentItems.map((row, index) =>
        <tr className={styles.table_row} key={index}>{row.cells.map((cell, index) => <td key={index}>{cell}</td>)}</tr>
      );

      return (
        <table className={styles.table}><tbody className={styles.table_body}>{header}{content}</tbody></table>
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
