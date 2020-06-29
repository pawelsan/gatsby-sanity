import React from 'react'
import styles from './footer.module.css'

const Footer = () => (
    <footer>
        <div className={styles.copyright}>
            &copy; {new Date().getFullYear()}{' '}Powiatowe Centrum Pomocy Rodzinie w Żyrardowie
        </div>
    </footer>
);

export default Footer;