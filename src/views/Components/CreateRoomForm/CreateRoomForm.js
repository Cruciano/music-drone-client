import React from 'react';
import {useDispatch} from "react-redux";
import {createRoom} from "../../../application/actions/room";
import {Field, Form, Formik} from "formik";
import styles from "./CreateRoomFrom.module.css";
import formStyles from "../../CommomStyles/Form.module.css";
import * as Yup from "yup";

const schema = Yup.object().shape({
    roomName: Yup.string()
        .required('Required'),
});

const CreateRoomForm = ({close}) => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
        dispatch(createRoom(values.roomName));
        close();
    }

    return (
        <div className={styles.wrapper}>
            <div className={formStyles.title}>Create room</div>
            <Formik
                initialValues={{
                    roomName: '',
                }}
                validationSchema={schema}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className={formStyles.formItem}>
                            <Field name="roomName" placeholder="Room name"/>
                            {errors.roomName && touched.roomName ? (
                                <div className={formStyles.help}>{errors.roomName}</div>
                            ) : <div className={`${formStyles.help} ${formStyles.hidden}`}>hidden</div>}
                        </div>
                        <button className={formStyles.button} type="submit">Create</button>
                    </Form>
                )}
            </Formik>
        </div>
        /*<form onSubmit={handleSubmit}>
            <label>
                <input type="text" value={roomName} onChange={e => setRoomName(e.target.value) } placeholder="Name"/>
                <input type="submit" value="Create"/>
            </label>
        </form>*/
    );
};

export default CreateRoomForm;