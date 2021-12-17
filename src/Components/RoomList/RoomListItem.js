import React from 'react';
import styles from './RoomList.module.css';
import {NavLink} from "react-router-dom";

const RoomListItem = ({title, description, online}) => {
    return (
        <div className={styles.item}>
            <div className={styles.mainInfo}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.rightBlock}>
                <div>Online: {online}</div>
                <NavLink to="/Room">Enter</NavLink>
            </div>
        </div>
    );
};

export default RoomListItem;