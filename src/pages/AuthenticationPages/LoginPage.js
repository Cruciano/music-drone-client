import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from './Authentication.module.css';
import NavLink from "react-router-dom/es/NavLink";

const schema = Yup.object().shape({
    login: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

const LoginPage = ({history}) => {
    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
        history.push('/');
    }

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Music Drone</div>
                <Formik
                    initialValues={{
                        login: '',
                        password: '',
                    }}
                    validationSchema={schema}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                >
                    {({errors, touched}) => (
                        <Form>
                            <div className={styles.formItem}>
                                <Field name="login" placeholder="Login"/>
                                {errors.login && touched.login ? (
                                    <div className={styles.help}>{errors.login}</div>
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
                                {"Already registered? "}
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