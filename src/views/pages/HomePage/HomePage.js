import React from 'react';
import styles from './HomePage.module.css';
import RoomList from "../../Components/RoomList/RoomList";

const CreateRoom = () => {
    console.log("create room pressed")
}

const HomePage = () => {
    //let name = sessionStorage.getItem('user').name;

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    Welcome, user_name!
                </div>
                <div className={styles.subtitle}>
                    <div>You can join public room or create your own</div>
                    <button onClick={CreateRoom}>Create room</button>
                </div>
                <RoomList/>
            </div>
        </div>
    );
};

export default HomePage;