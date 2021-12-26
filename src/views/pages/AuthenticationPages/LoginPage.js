import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from './Authentication.module.css';
import {NavLink, Redirect} from "react-router-dom/";
import {useDispatch, useSelector} from "react-redux";
import {getAuthStatus} from "../../../application/selectors/authStatus";
import {login_failure, login_success} from "../../../application/reducers/userUI";
import {login} from "../../../application/actions/user";

const schema = Yup.object().shape({
    email: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

const LoginPage = () => {
    const dispatch = useDispatch();
    const authStatus = useSelector(getAuthStatus);


    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
        dispatch(login({
            email: values.email,
            password: values.password,
        }))
    }

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Music Drone</div>
                {authStatus === login_success
                    ? <Redirect to="/"/>
                    : null}
                {authStatus === login_failure
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