import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './pages.module.css'
import logo_green from '../images/logo_green.png'

const Handicap = () => (
    <Layout>
        <SEO title='Osoby z niepełnosprawnością' />
        <div className={styles.page_header}>
            <div><img src={logo_green} alt="Zielona część loga PCPR" /></div>
            <h1>Osoby z niepełnosprawnością</h1></div>
        <p>Strona o pomocy dla osób z niepełnosprawnościami</p>
    </Layout>
)

export default Handicap