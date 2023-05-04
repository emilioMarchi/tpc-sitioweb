import Carousel from 'react-bootstrap/Carousel';
import { HomeCarouseItem } from "./homeCarouselItem/HomeCarouselItem"
import './homeCarousel.css'

const CarouselData = [
    {
        title: 'Desarrollo web',
        description: `Desarrollamos sitios web y tiendas virtuales para
        que tu negocio tenga presencia en internet`,
        
        urlImg: ''
    },
    {
        title: 'Marketing Digital',
        description: `Gestionamos las redes de tu marca. Segmentamos su audiencia. 
        Estudiamos su mercado`,
        urlImg: ''
    },
    {
        title: 'Contenido de marca',
        description: `Nos encargamos del contenido de tu negocio. La identidad gráfica de tu marca,
        el contenido para tus redes sociales y las fotos de tus productos `,
        
        urlImg: ''
    },
]

export const HomeCarousel = () => {
    return(
        <Carousel interval={7000} controls={false} indicators={false}>
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