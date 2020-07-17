import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from '../pages.module.css'
import logo_blue from '../../images/logo_blue.png'

const Foreigners = () => (
    <Layout>
        <SEO title='Cudzoziemcy' />
        <div className={styles.page_header}>
            <div><img src={logo_blue} alt="Niebieska część loga PCPR" /></div>
            <h1>Cudzoziemcy</h1>
        </div>
        <p>Prosimy o przejście do jednej z następujących stron:</p>
        <Link to='pomoc-integracyjna'><div>Pomoc integracyjna</div></Link>
        <Link to='karta-polaka'><div>Karta Polaka</div></Link>
        <Link to='pomoc-repatriantom'><div>Pomoc Repatriantom</div></Link>
    </Layout>
)

export default Foreigners