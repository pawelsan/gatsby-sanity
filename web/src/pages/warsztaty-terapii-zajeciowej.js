import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './pages.module.css'
import logo_orange from '../images/logo_orange.png'


const TherapyWorkshops = () => (
    <Layout>
        <SEO title='Warsztaty Terapii Zajęciowej' />
        <div className={styles.page_header}>
            <div><img src={logo_orange} alt="Pomarańczowa część loga PCPR" /></div>
            <h1>Warsztaty Terapii Zajęciowej</h1>
        </div>
        <p>Strona o WTŻ</p>
    </Layout>
)

export default TherapyWhorkshops