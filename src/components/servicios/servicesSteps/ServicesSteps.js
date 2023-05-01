import Carousel from 'react-bootstrap/Carousel';
import { ServicesStepItem } from './ServicesStepItem';
import { faMessage, faPenToSquare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const ServicesStepsData = [
    {
        title:'1. Hablemos',
        text:'Contactanos para contarnos que es lo que estas buscando',
        icon:faMessage,
    },
    {
        title:'2. Presupuestamos y planificamos',
        text:'Te proponemos y presentamos una propuesta que se ajuste a lo que necesita tu negocio',
        icon:faPenToSquare,
    },
    {
        title:'3. Listos para trabajar',
        text:'Una vez que llegamos a un acuerdo ponemos fecha y empezamos a trabajar con vos',
        icon:faThumbsUp,
    },
]

export const ServicesSteps = () => {
    return(
        <div className='services-steps-carousel'>
            {
                ServicesStepsData.map((item) => {
                    return(
                            <ServicesStepItem data={item}/>
                    )
                })
            }
        </div>
    )
}