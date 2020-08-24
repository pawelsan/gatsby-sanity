import React from 'react';
import PortableText from '../portableText';
import Container from '../container';

import styles from './content-page.module.css'

const ContentPage = ({ _rawContent, _rawContent2, _rawContent3, contentTitle }) => {
    return (
        <>
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
        </>
    );
}

export default ContentPage;