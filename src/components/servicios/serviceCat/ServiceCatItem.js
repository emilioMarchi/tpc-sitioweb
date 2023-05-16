import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { ServicesList } from './ServicesList'



export const ServiceCatItem = ({title, services, urlImgBanner}) => {

    
    const [carouselState, setCarouselState] = useState(false)
    
    return(
        <div className='service-cat'>
            <div className='service-cat-header' style={{backgroundImage: `url(${urlImgBanner})`}}>
                <div className='service-title'>
                    <h2>{title}</h2>
                   
                </div>
                <div className='service-description'>   
                    {
                        services.map(item => {
                            return(
                                <h3>{item.title}</h3>
                            )
                        })
                    }
                </div>
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
            <div className={carouselState == false ? 'service-cat-body d-none  ' : 'service-cat-body d-block' }>
                    <ServicesList services={services} />
            </div>
        </div>
    )
}