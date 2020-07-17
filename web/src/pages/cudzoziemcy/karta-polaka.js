import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from '../pages.module.css'
import logo_blue from '../../images/logo_blue.png'


const Card = () => (
    <Layout>
        <SEO title='Karta Polaka' />
        <div className={styles.page_header}>
            <div><img src={logo_blue} alt="Niebieska część loga PCPR" /></div>
            <h1>Karta Polaka</h1>
        </div>
        <p>Strona dotycząca Karty Polaka</p>
    </Layout>
)

export default Card