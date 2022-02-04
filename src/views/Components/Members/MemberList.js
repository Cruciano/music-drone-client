import React, {useEffect} from 'react';
import MemberItem from "./MemberItem";
import styles from './Members.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getRoomUsers as getRoomUsersAction} from "../../../application/actions/roomUser";
import {getRoomUsers} from "../../../application/selectors/roomUser";

const MemberList = ({roomId}) => {
    const dispatch = useDispatch();
    const users = useSelector(getRoomUsers);

    useEffect(() => {
        dispatch(getRoomUsersAction(roomId))
    }, [])

    return (
        <div className={styles.members}>
            {users.map(item => <MemberItem key={item.id} username={item.firstName} />)}
        </div>
    );
};

export default MemberList;