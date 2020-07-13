import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from '../pages.module.css'
import logo_orange from '../../images/logo_orange.png'


const AssistanceHomes = () => (
    <Layout>
        <SEO title='Domy Pomocy Społecznej' />
        <div className={styles.page_header}>
            <div><img src={logo_orange} alt="Pomarańczowa część loga PCPR" /></div>
            <h1>Domy Pomocy Społecznej</h1>
        </div>
        <p>Strona o DPS</p>
    </Layout>
)

export default AssistanceHomes