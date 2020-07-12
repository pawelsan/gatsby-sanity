import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './pages.module.css'
import logo_green from '../images/logo_green.png'

const ActiveSelfGovernment = () => (
    <Layout>
        <SEO title='Aktywny samorząd' />
        <div className={styles.page_header}>
            <div><img src={logo_green} alt="Zielona część loga PCPR" /></div>
            <h1>Aktywny samorząd</h1></div>
        <p>Strona na temat programu Aktywny Samorząd</p>
    </Layout>
)

export default ActiveSelfGovernment