import React from 'react'
import { ServicesDescription } from "../components/servicios/servicesDescription/ServicesDescription"
import { ServiceCat } from '../components/servicios/serviceCat/ServiceCat'
import { ServicesBenList } from '../components/servicios/servicesBen/ServicesBenList'
import { Contact } from '../components/contact/Contact'
import { ServicesBanner } from '../components/servicios/servicesBanner/ServicesBanner'

export const Servicios = () => {
    return(
        <div className='pt-page'>
            <ServicesBanner />
            <ServicesDescription />
            <ServiceCat />
            <ServicesBenList />
            <Contact />
        </div>
    )
}