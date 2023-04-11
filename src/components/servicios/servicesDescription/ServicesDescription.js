import React from 'react'
import './servicesDescription.css'

export const ServicesDescription = () => {
    return(
        <div className='services-description'>
            <div className='title'>
                <h2>¿Qué podemos hacer por tu negocio?</h2>
            </div>
            <div className='services-list'>
                <div className='service'>
                    <img src='/img/icons/content-icon.png' />
                    <h3>Descripcion del servicio en cuestion explicando bla bla bla</h3>
                </div>
                <div className='service'>
                    <img src='/img/icons/content-icon.png' />
                    <h3>Descripcion del servicio en cuestion explicando bla bla bla</h3>
                </div>
                <div className='service'>
                    <img src='/img/icons/content-icon.png' />
                    <h3>Descripcion del servicio en cuestion explicando bla bla bla</h3>
                </div>
            </div>
        </div>
    )
}