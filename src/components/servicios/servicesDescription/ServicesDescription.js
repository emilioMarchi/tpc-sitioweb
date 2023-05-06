import React from 'react'
import './servicesDescription.css'
import { ServicesDescriptionItem } from './ServicesDescriptionItem'

import { faChartSimple, faPenNib, faGlobe} from '@fortawesome/free-solid-svg-icons'

const servicesDescriptionData = [
    {
        description: `Construimos una estrategia digital para que la gente te
        encuentre.`,
        icon: faChartSimple
    },
    {
        description: `Nos ocupamos del contenido gráfico para tus redes con calidad
        y creatividad.`,
        icon: faPenNib
    },
    {
        description: `Le brindamos a tu negocio presencia online y automatización. 
        Disponibilidad las 24hs.`,
        icon: faGlobe
    },
]

export const ServicesDescription = () => {
    return(
        <div className='services-description'>
            <div className='title'>
                <h2>¿Qué podemos hacer por tu negocio?</h2>

            </div>
            <div className='services-list'>
                
                {
                    servicesDescriptionData.map(item => {
                        return(
                            <ServicesDescriptionItem data={item} />
                        )
                    }) 
                }
            </div>
        </div>
    )
}