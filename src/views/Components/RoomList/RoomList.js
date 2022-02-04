import React from 'react';
import styles from './RoomList.module.css';
import RoomListItem from "./RoomListItem";

const RoomList = ({rooms}) => {
    return (
        <div className={styles.RoomList}>
            {rooms ? rooms.map(item => <RoomListItem key={item.id} title={item.name} id={item.id} />)
                   : <p style={{textAlign: 'center'}}>No rooms available</p>}
        </div>
    );
};

export default RoomList;