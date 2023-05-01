import React from 'react';
import { Formik } from 'formik';

const FormContact = () => (
  <div className='form'>
    <Formik
      initialValues={{ name: '', email: '', text: ''  }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="name"
            placeholder='Nombre'

            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.password && touched.password && errors.password}
          <input
            type="email"
            name="email"
            placeholder='Número de contacto o Correo electónico'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="text"
            name="text"
            placeholder='Contanos que buscás'

            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          
          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default FormContact;