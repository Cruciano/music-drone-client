import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from './Authentication.module.css';
import NavLink from "react-router-dom/es/NavLink";
import userService from "../../Services/UserService";
import {useDispatch, useSelector} from "react-redux";
import {userStatuses} from "../../redusers/UserStatuses";

const schema = Yup.object().shape({
    email: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

const LoginPage = ({history}) => {
    const dispatch = useDispatch();
    const logStatus = useSelector(state => state.LogStatus);

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
        userService.login(
            values.email,
            values.password
        ).then(isLoggedin => {
            if(isLoggedin){
                dispatch({type: "logged-in"})
            }
            else {
                dispatch({type: "login-failed"})
            }
        });
        history.push('/');
    }

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Music Drone</div>
                {logStatus === userStatuses.LOGIN_FAILED
                    ? <div className={styles.help}>Invalid login or password</div>
                    : null}
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={schema}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                >
                    {({errors, touched}) => (
                        <Form>
                            <div className={styles.formItem}>
                                <Field name="email" placeholder="email"/>
                                {errors.email && touched.email ? (
                                    <div className={styles.help}>{errors.email}</div>
                                ) : <div className={`${styles.help} ${styles.hidden}`}>hidden</div>}
                            </div>
                            <div className={styles.formItem}>
                                <Field name="password" type="password" placeholder="Password"/>
                                {errors.password && touched.password ? (
                                    <div className={styles.help}>{errors.password}</div>
                                ) : <div className={`${styles.help} ${styles.hidden}`}>hidden</div>}
                            </div>
                            <button className={styles.button} type="submit">Sign in</button>
                            <div className={styles.redirection}>
                                {"Don't have account? "}
                                <NavLink to="/Registration">Sign up</NavLink>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginPage;