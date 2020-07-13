import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from '../pages.module.css'
import logo_green from '../../images/logo_green.png'

const SocialRehab = () => (
    <Layout>
        <SEO title='Rehabilitacja społeczna' />
        <div className={styles.page_header}>
            <div><img src={logo_green} alt="Zielona część loga PCPR" /></div>
            <h1>Rehabilitacja społeczna</h1></div>
        <p>Strona na temat rehabilitacji społecznej</p>
    </Layout>
)

export default SocialRehab