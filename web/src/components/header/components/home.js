import React from 'react';
import { Link } from "gatsby";
import logo from "../../../images/logo-small.png";
import styles from "../styles/header.module.css";


const Home = ({ title, smallViewport, handleShowNav }) => {
    return (
        <li className={`${styles.nav_item} ${styles.home}`} onClick={handleShowNav}>
            <Link to="/" className={styles.home_link} activeClassName={styles.nav_item_active}>
                {!smallViewport && <img className={styles.logo} src={logo} alt="Logo PCPR" />}
                <span className={styles.home_span}> {title}</span>
            </Link>
        </li>
    );
}

export default Home;