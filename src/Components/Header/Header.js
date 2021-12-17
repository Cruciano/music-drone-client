import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <NavLink to="/Home">Music Drone</NavLink>
            </div>
            <div className={styles.links}>
                <NavLink to="/Registration">Sign up</NavLink>
                <NavLink to="/Login">Sign in</NavLink>
            </div>
        </header>
    );
};

export default Header;