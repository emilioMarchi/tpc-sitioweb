import React from 'react'
import { ServicesDescription } from "../components/servicios/servicesDescription/ServicesDescription"
import { ServiceCat } from '../components/servicios/serviceCat/ServiceCat'
export const Servicios = () => {
    return(
        <div className='pt-page'>
            <ServicesDescription />
            <ServiceCat />
        </div>
    )
}