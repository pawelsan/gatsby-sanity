import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './pages.module.css'
import logo_blue from '../images/logo_blue.png'

const Foster = () => (
  <Layout>
    <SEO title='Piecza zastępcza' />
    <div className={styles.page_header}>
      <div><img src={logo_blue} alt="Niebieska część loga PCPR" /></div>
      <h1>Rodziny zastępcze</h1>
    </div>
    <p>Strona o rodzianch zastępczych</p>
  </Layout>
)

export default Foster