import React from 'react';
import styles from './RoomPage.module.css';
import Player from "../../Components/Player/Player";
import Members from "../../Components/Members/Members";

const RoomPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.title}>The best room</div>
            <div className={styles.wrapper}>
                <Members/>
                <Player/>
            </div>
        </div>
    );
};

export default RoomPage;