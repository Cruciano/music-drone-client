import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

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
                    <Field name="login" placeholder="Login"/>
                    {errors.login && touched.login ? (
                        <div>{errors.login}</div>
                    ) : null}
                    <Field name="password" type="password" placeholder="Password"/>
                    {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginPage;