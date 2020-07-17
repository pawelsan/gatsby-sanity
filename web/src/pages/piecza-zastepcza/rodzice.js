import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from '../pages.module.css'
import logo_red from '../../images/logo_red.png'

const FosterParents = () => (
    <Layout>
        <SEO title='Rodzice dzieci w pieczy zastępczej' />
        <div className={styles.page_header}>
            <div><img src={logo_red} alt="Czerwona część loga PCPR" /></div>
            <h1>Rodzice dzieci w pieczy zastępczej</h1>
        </div>
        <p>Strona dot. rodziców dzieci w pieczy zastępczej</p>
    </Layout>
)

export default FosterParents