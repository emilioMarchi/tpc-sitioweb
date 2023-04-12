import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { ServicesCarousel } from '../../home/servicesCarousel/ServicesCarousel'



export const ServiceCatItem = ({imageUrl}) => {

    
    const [carouselState, setCarouselState] = useState(false)

    return(
        <div className='service-cat'>
            <div className='service-cat-header' style={{backgroundImage: `url(${imageUrl})`}}>
                <div className='service-title'>
                    <h2>Nombre de categoria</h2>
                    {
                        carouselState == false ?
                        <FontAwesomeIcon className='service-icon' icon={faCircleChevronDown} 
                            onClick={()=>{
                                if(carouselState == false){
                                    setCarouselState(true)
                                } else {
                                    setCarouselState(false)
                                }
                            }}
                        /> :
                        <FontAwesomeIcon className='service-icon' icon={faCircleChevronUp} 
                            onClick={()=>{
                                if(carouselState == false){
                                    setCarouselState(true)
                                } else {
                                    setCarouselState(false)
                                }
                            }}
                        />
                    }
                </div>
                <div className='service-description'>
                    <h3>Nombre de servicio</h3>
                
                    <h3>Nombre de servicio</h3>
                    <h3>Nombre de servicio</h3>
                </div>
            </div>
            <div className={carouselState == false ? 'service-cat-body d-none  ' : 'service-cat-body d-block' }>
                <ServicesCarousel/>
            </div>
        </div>
    )
}