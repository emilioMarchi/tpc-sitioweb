import { ServiceCatItem } from './ServiceCatItem'
import './serviceCat.css'


const servicesItems = [
    {
        title: 'Desarrollo web',
        services: ['Sitio web', 'Tienda online'],
        imageUrl:'/img/desarrollo.png' 
    },
    {
        title: 'Marketing digital',
        services: ['Community managear', 'Campañas para redes'],
        imageUrl:'/img/marketing.png'
    },
    {
        title: 'Contenido de marca',
        services: ['Contenido para redes', 'Foto producto', 'Identidad de marca'],
        imageUrl:'/img/contenido.png'
    },
]

export const ServiceCat = () => {

    return(
        <div >
            {
                servicesItems.map(item => {
                    return(
                        <ServiceCatItem title={item.title} services={item.services} imageUrl={item.imageUrl} />
                    )
                })
            }
        </div>
    )
}