import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';

const root = `http://170.64.181.199`
const baseUrl = `${root}/contact`


const FormContact = () => (
 
  
  <div className='form'>
    
    <Formik
      initialValues={{ userName: '', userEmail: '', userQuery: ''  }}
      validate={values => {
        const errors = {};
        if (!values.userEmail) {
          errors.userEmail = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail)
        ) {
          errors.userEmail = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values)
        setTimeout(() => {

          axios.post(baseUrl, values)
          .then((res)=>{
            console.log(res)
            resetForm()
            
          })

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
        resetForm,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="userName"
            placeholder='Nombre'

            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
          />
        
          <input
            type="email"
            name="userEmail"
            placeholder='Número de contacto o Correo electónico'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userEmail}
          />
          {errors.userEmail && touched.userEmail && errors.userEmail}
          <input
            type="text"
            name="userQuery"
            placeholder='Contanos que buscás'

            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userQuery}
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