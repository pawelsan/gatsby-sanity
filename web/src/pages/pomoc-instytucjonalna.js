import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './pages.module.css'
import logo_orange from '../images/logo_orange.png'


const Assistance = () => (
    <Layout>
        <SEO title='Pomoc instytucjonalna' />
        <div className={styles.page_header}>
            <div><img src={logo_orange} alt="Pomarańczowa część loga PCPR" /></div>
            <h1>Pomoc instytucjonalna</h1>
        </div>
        <p>Strona o pomocy instytucjonalna</p>
    </Layout>
)

export default Assistance