import React from 'react';
import styles from './RoomList.module.css';
import {NavLink} from "react-router-dom";

const RoomListItem = ({title, id}) => {
    return (
        <div className={styles.item}>
            <div className={styles.mainInfo}>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.rightBlock}>
                <NavLink to={`/Room/${id}`}>Enter</NavLink>
            </div>
        </div>
    );
};

export default RoomListItem;