import React, {useEffect, useState} from 'react';
import styles from './HomePage.module.css';
import RoomList from "../../Components/RoomList/RoomList";
import {useDispatch, useSelector} from "react-redux";
import {getFirstName} from "../../../application/selectors/user";
import {getRooms} from "../../../application/selectors/room";
import {getAllRooms} from "../../../application/actions/room";
import Modal from "../../Components/Modal/Modal";
import CreateRoomForm from "../../Components/CreateRoomForm/CreateRoomForm";

const HomePage = () => {
    const dispatch = useDispatch();
    const name = useSelector(getFirstName);
    const rooms = useSelector(getRooms);

    const [active, setActive] = useState(false);

    useEffect(()=>{
        dispatch(getAllRooms);
    }, [rooms])

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    Welcome, {name}!
                </div>
                <div className={styles.subtitle}>
                    <div>You can join public room or create your own</div>
                    <button onClick={() => setActive(true)}>Create room</button>
                </div>
                <RoomList rooms={rooms}/>
            </div>
            <Modal active={active} setActive={setActive}>
                <CreateRoomForm close={() => setActive(false)}/>
            </Modal>
        </div>
    );
};

export default HomePage;