import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import {useSelector, useDispatch} from 'react-redux'
import { changeNavState,pushNotification } from "../../home/servicesCarousel/ServicesSlice"
import { useState,useEffect } from "react"
import {Toaster, toast} from 'react-hot-toast'

const root = `http://170.64.181.199:8080`
const baseUrl = `${root}/contact/new-query `


export const FormContact = () => {
 
  const [formSubmitState, setFormSubmitState] = useState()
  const dispatch = useDispatch()
  const servicesSliceState = useSelector(state=>state.servicesSlice)
  useEffect(() => {
    
    
  }, [])


  return(

  
  <div className='form'>

    <Toaster duration='10000' toastOptions={
      {
        style:{background:'black', color: 'white', fontSize: '24px'}
      }
    }/>
    <Formik
      initialValues={{ userName: '', userEmail: '', userQuery: ''  }}
      validate={values => {
        const errors = {};
        if (!values.userName) {
          errors.userName = 'Required';
        } 
        if (!values.userQuery) {
          errors.userQuery = 'Required';
        } 
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
       
        setTimeout(() => {

          axios.post(baseUrl, values)
          .then((res)=>{
            if(res.status == 200){
              dispatch(pushNotification({active:true, text :'Mensaje enviado'}))
              console.log('mensaje enviado')
              toast.success(`Hola ${values.userName}, tu consulta fue enviada. Pronto nos estaremos comunicando.`)
              resetForm()

              setTimeout(()=>{
                dispatch(pushNotification({active:false, text :'otra cosa'}))
                console.log('end')
              }, 5000)
            }else {
              toast.error('Hubo un error al querer enviar el mensaje. Intenta nuevamente.')

            }

            
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
  )
}
