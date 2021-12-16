import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    login: Yup.string()
        .required('Required')
        .min(2, 'Login must be 2+ characters'),
    password: Yup.string()
        .required('Required')
        .matches(/(?=.*[0-9])/, 'Passwords must have at least one digit (\'0\'-\'9\')')
        .matches(/(?=.*[^a-zA-Z\d\s:])/, 'Passwords must have at least one non alphanumeric character')
        .matches(/(?=.*[a-z])/, 'Passwords must have at least one lowercase (\'a\'-\'z\')')
        .matches(/(?=.*[A-Z])/, 'Passwords must have at least one uppercase (\'A\'-\'Z\')')
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
                <Form>
                    <Field name="login" placeholder="Login"/>
                    {errors.login && touched.login ? (
                        <div>{errors.login}</div>
                    ) : null}
                    <Field name="password" type="password" placeholder="Password"/>
                    {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                    ) : null}
                    <Field name="confirmPassword" type="password" placeholder="Confirm Password"/>
                    {errors.confirmPassword && touched.confirmPassword ? (
                        <div>{errors.confirmPassword}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
};

export default RegistrationPage;