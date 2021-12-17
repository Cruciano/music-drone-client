import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from './Authentication.module.css';
import NavLink from "react-router-dom/es/NavLink";

const schema = Yup.object().shape({
    login: Yup.string()
        .required('Required')
        .min(2, 'Login must be 2+ characters'),
    password: Yup.string()
        .required('Required')
        .matches(/(?=.*[0-9])/, 'Passwords must have digit (\'0\'-\'9\')')
        .matches(/(?=.*[a-z])/, 'Passwords must have lowercase (\'a\'-\'z\')')
        .matches(/(?=.*[A-Z])/, 'Passwords must have uppercase (\'A\'-\'Z\')')
        .matches(/(?=.*[^a-zA-Z\d\s:])/, 'Passwords must have non alphanumeric character')
        .matches(/^.{6,}/, 'Passwords must be at least 6 characters'),
    confirmPassword: Yup.string()
        .required('Required')
        .when('password', {
            is: val => (val && val.length > 0),
            then: Yup.string().oneOf(
                [Yup.ref('password')],
                'Both password must be the same',
            ),
        })
});

const RegistrationPage = ({history}) => {
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
                        confirmPassword: ''
                    }}
                    validationSchema={schema}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                >
                    {({errors, touched}) => (
                        <Form classname={styles.form}>
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
                            <div className={styles.formItem}>
                                <Field name="confirmPassword" type="password" placeholder="Confirm Password"/>
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div className={styles.help}>{errors.confirmPassword}</div>
                                ) : <div className={`${styles.help} ${styles.hidden}`}>hidden</div>}
                            </div>
                            <button className={styles.button} type="submit">Sign up</button>
                            <div className={styles.redirection}>
                                {"Already have account? "}
                                <NavLink to="/Login">Sign in</NavLink>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

export default RegistrationPage;