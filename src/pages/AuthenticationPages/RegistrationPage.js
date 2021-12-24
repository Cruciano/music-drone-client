import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from './Authentication.module.css';
import {NavLink} from "react-router-dom/";
import userService from "../../API/UserService";
import {useDispatch} from "react-redux";

const schema = Yup.object().shape({
    name: Yup.string()
        .required('Required')
        .min(2, 'Login must be 2+ characters'),
    surname: Yup.string()
        .required('Required')
        .min(2, 'Login must be 2+ characters'),
    email: Yup.string()
        .email('Invalid email')
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
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
        userService.register(
            values.name,
            values.surname,
            values.email,
            values.password
        ).then(isRegistered => {
            if(isRegistered){
                dispatch({type: "logged-in"})
            }
            else {
                dispatch({type: "registration-failed"})
            }
        });
        history.push('/');
    }

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Music Drone</div>
                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={schema}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                >
                    {({errors, touched}) => (
                        <Form classname={styles.form}>
                            <div className={styles.formItem}>
                                <Field name="name" placeholder="name"/>
                                {errors.name && touched.name ? (
                                    <div className={styles.help}>{errors.name}</div>
                                ) : <div className={`${styles.help} ${styles.hidden}`}>hidden</div>}
                            </div>
                            <div className={styles.formItem}>
                                <Field name="surname" placeholder="surname"/>
                                {errors.surname && touched.surname ? (
                                    <div className={styles.help}>{errors.surname}</div>
                                ) : <div className={`${styles.help} ${styles.hidden}`}>hidden</div>}
                            </div>
                            <div className={styles.formItem}>
                                <Field name="email" placeholder="Email"/>
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