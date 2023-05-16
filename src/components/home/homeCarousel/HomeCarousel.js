import Carousel from 'react-bootstrap/Carousel';
import { HomeCarouseItem } from "./homeCarouselItem/HomeCarouselItem"
import './homeCarousel.css'

const CarouselData = [
    {
        title: 'Desarrollo web',
        description: `Desarrollamos sitios web y tiendas virtuales para
        que tu negocio tenga presencia en internet`,
        
        urlImg: '/img/services-png/dev-portada.svg'
    },
    {
        title: 'Marketing Digital',
        description: `Gestionamos las redes de tu marca. Segmentamos su audiencia. 
        Estudiamos su mercado`,
        urlImg: '/img/services-png/marketing-portada.svg'
    },
    {
        title: 'Contenido de marca',
        description: `Nos encargamos del contenido de tu negocio. La identidad gráfica de tu marca,
        el contenido para tus redes sociales y las fotos de tus productos `,
        
        urlImg: '/img/services-png/content-portada.svg'
    },
]

export const HomeCarousel = () => {
    return(
        <Carousel pause={false} interval={7000} controls={false} indicators={false}>
            {
                CarouselData.map(item => {
                    return ( 
                        <Carousel.Item>
                                <HomeCarouseItem data={item} />
                        </Carousel.Item>

                    )
                })
            }
         
        </Carousel>
       
    )
}