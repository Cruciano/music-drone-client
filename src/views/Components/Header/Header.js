import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';
import {useDispatch} from "react-redux";
import {logout} from "../../../application/actions/user";

const Header = () => {
    const dispatch = useDispatch();

    const onClickLogOut = () => {
        dispatch(logout);
    }

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <NavLink to="/Home">Music Drone</NavLink>
            </div>
            <div className={styles.links}>
                <button onClick={onClickLogOut}>Log out</button>
            </div>
        </header>
    );
};

export default Header;