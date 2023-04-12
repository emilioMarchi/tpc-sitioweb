import { ServiceCatItem } from './ServiceCatItem'
import './serviceCat.css'

const imageUrls=['/img/desarrollo.jpg','/img/marketing.jpg', '/img/contenido.jpg' ]

export const ServiceCat = () => {

    return(
        <div >
            <ServiceCatItem imageUrl={imageUrls[0]} />
            <ServiceCatItem imageUrl={imageUrls[1]}/>
            <ServiceCatItem imageUrl={imageUrls[2]}/>
        </div>
    )
}