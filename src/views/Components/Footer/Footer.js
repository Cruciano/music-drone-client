import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
            {"Copyright © 2021 Trutni Inc. All rights reserved"}
            </div>
            <div>
                Ukraine
            </div>
        </footer>
    );
};

export default Footer;