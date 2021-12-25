/*import React from 'react';
import userService from "../../../API/UserService";
import styles from "./ApiTest.module.css"
import roomService from "../../../API/RoomService";
import roomUserService from "../../../API/RoomUserService";

const LoginTest = async () => {
    await userService.login("vasya@gmail.com", "Aa-11111")
    console.log(`value from storage: ${localStorage.getItem('token')}`)
}

const Logout = () => {
    userService.logout()
    console.log(`value from storage: ${localStorage.getItem('token')}`)
}

const RegisterTest = async () => {
    const isWorking = await userService.register("Vasya1", "Pupkin1", "vaasya@gmail.com", "Aa-111111")
    console.log(isWorking)
}

const ProfileTest = async () => {
    const data = await userService.profile()
    console.log(data)
}


const CreateRoomTest = async () => {
    const data = await roomService.create("newroom")
    console.log(data)
}

const GetRoomListTest = async () => {
    const data = await roomService.GetAll();
    console.log(data)
}

const GetRoomByIdTest = async () => {
    const data = await roomService.GetById("3710c373-ec8b-4ff1-1f4e-08d9c6405fa3");
    console.log(data)
}

const DeleteRoomTest = async () => {
    const isDeleted = await roomService.Delete("3710c373-ec8b-4ff1-1f4e-08d9c6405fa3");
    console.log(isDeleted)
}

const EnterRoom = async () => {
    const isEntered = await roomUserService.Enter("d6c84f49-047a-4f4d-d5ab-08d9c6f4e227");
    console.log(isEntered)
}
const GetRoomMembers = async () => {
    const data = await roomUserService.GetMembers("d6c84f49-047a-4f4d-d5ab-08d9c6f4e227");
    console.log(data)
}
const GetMyRooms = async () => {
    const data = await roomUserService.GetMyRooms();
    console.log(data)
}
const Exit = async () => {
    const isExit = await roomUserService.Exit("d6c84f49-047a-4f4d-d5ab-08d9c6f4e227");
    console.log(isExit)
}*/

const ApiTestPage = () => {
    return ( <></>
        /*<div className={styles.page}>
            <div className={styles.block}>
                <h4>User tests</h4>
                <button onClick={LoginTest}>Login</button>
                <button onClick={RegisterTest}>Register</button>
                <button onClick={ProfileTest}>Profile</button>
                <button onClick={Logout}>Logout</button>
            </div>
            <div className={styles.block}>
                <h4>Room tests</h4>
                <button onClick={CreateRoomTest}>Create Room</button>
                <button onClick={GetRoomListTest}>Get Room List</button>
                <button onClick={DeleteRoomTest}>Delete Room</button>
                <button onClick={GetRoomByIdTest}>Get Room By Id</button>
            </div>
            <div className={styles.block}>
                <h4>Room user tests</h4>
                <button onClick={EnterRoom}>Enter Room</button>
                <button onClick={GetRoomMembers}>Get members</button>
                <button onClick={GetMyRooms}>Get my rooms</button>
                <button onClick={Exit}>Exit</button>
            </div>
        </div>*/
    );
};

export default ApiTestPage;