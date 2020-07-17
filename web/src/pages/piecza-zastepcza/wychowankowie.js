import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from '../pages.module.css'
import logo_red from '../../images/logo_red.png'

const FosterChildren = () => (
    <Layout>
        <SEO title='Usamodzielniani wychowankowie' />
        <div className={styles.page_header}>
            <div><img src={logo_red} alt="Czerwona część loga PCPR" /></div>
            <h1>Usamodzielniani wychowankowie</h1>
        </div>
        <p>Strona dot. usamodzielnianych wychowanków</p>
    </Layout>
)

export default FosterChildren