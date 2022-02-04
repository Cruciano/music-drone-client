import React from 'react';
import styles from './RoomPage.module.css';
import Player from "../../Components/Player/Player";
import MemberList from "../../Components/Members/MemberList";
import {useParams} from "react-router-dom";

const RoomPage = () => {
    let params = useParams()

    return (
        <div className={styles.page}>
            <div className={styles.title}>The best room</div>
            <div className={styles.wrapper}>
                <MemberList roomId={params.id}/>
                <Player/>
            </div>
        </div>
    );
};

export default RoomPage;