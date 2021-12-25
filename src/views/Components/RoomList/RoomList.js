import React from 'react';
import styles from './RoomList.module.css';
import RoomListItem from "./RoomListItem";

const RoomList = () => {
    return (
        <div className={styles.RoomList}>
            <RoomListItem title="Best room 1" description="This is the best room 1" online={4}/>
            <RoomListItem title="Best room 2" description="This is the best room 2" online={5}/>
            <RoomListItem title="Best room 3" description="This is the best room 3" online={6}/>
        </div>
    );
};

export default RoomList;