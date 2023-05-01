import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { ServicesCarouselItem } from "./servicesCarouselItem/ServicesCarouselItem"
import './servicesCarousel.css'
import {useSelector, useDispatch} from 'react-redux'
import { changeNavState } from './ServicesSlice';




export const ServicesCarousel = () => {

    const dispatch = useDispatch()
    const servicesSliceState = useSelector(state=>state.servicesSlice)
 
    const [navState, setNavState] = useState()
    
  
    return(
        <div className='services-carousel-div'>
            <div className='services-carousel-nav'>
                <h2 className={servicesSliceState.navState == 'dev' ? 
                                'active' : ''    
            } onClick={()=>{
                    dispatch(changeNavState('dev'))
                }}>Desarrollo Web</h2>

                <h2 className={servicesSliceState.navState == 'mrk' ? 
                                'active' : ''    
            }
                    onClick={()=>{
                        dispatch(changeNavState('mrk'))
                    }}>Marketing Digital</h2>
                
                <h2 className={servicesSliceState.navState == 'content' ? 
                                'active' : ''    
            }
                onClick={()=>{
                    dispatch(changeNavState('content'))
                }}>Contenido de marca</h2>
            </div>
            <div className='services-carousel-container'>
                <ServicesCarouselItem/>
                
            </div>
           
        </div>
    )
}