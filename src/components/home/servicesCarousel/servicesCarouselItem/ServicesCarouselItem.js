import React, {useEffect, useState} from 'react'
import './servicesCarouselItem.css'
import {useSelector, useDispatch} from 'react-redux'




export const ServicesCarouselItem = () => {

    const dispatch = useDispatch()
    const servicesSliceState = useSelector(state=>state.servicesSlice)
    const [catIndex, setCatIndex] = useState(0)
    let windowWidth

    useEffect(()=>{
        if(servicesSliceState.navState == 'dev') {
            setCatIndex(0)
        }
        if(servicesSliceState.navState == 'mrk') {
            setCatIndex(1)
        }
        if(servicesSliceState.navState == 'content') {
            setCatIndex(2)
        } else {}
        

    }, [servicesSliceState])
  
    
    return(
        <div className={ 

            
             servicesSliceState.navState == 'content' && window.innerWidth > 479 && window.innerWidth < 840
             ? 'services-list justify-content-start' : 'services-list justify-content-center'
            }>
            {
                servicesSliceState.navState == 'dev' ||
                servicesSliceState.navState == 'mrk' ||
                servicesSliceState.navState == 'content' ? 
                servicesSliceState.servicesData[catIndex].services.map((item)=>{
                    
                    return (
                        <div className='services-card'>
                            <img src={item.urlImg} />
                            <div className='card-title'>
                                <h3>{item.title}</h3>
                                <h4>{item.shortDescription.slice(0, 75)+'...'}</h4>
                            </div>
                                <a href={`/servicios/:${item.path}`}>Ver más</a>
                        </div>
                    )
                }) : 
               
                ''
            }
            
        </div>
    )
}