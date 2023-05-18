import {useSelector, useDispatch} from 'react-redux'
import { changeNavState,pushNotification } from "../home/servicesCarousel/ServicesSlice"
import { useEffect } from "react"

import './notifications.css'

export const Notifications = () => {

    const dispatch = useDispatch()
    const servicesSliceState = useSelector(state=>state.servicesSlice)
    let notificationState 
    useEffect(() => {
        notificationState = servicesSliceState.notification.active
        
    }, [servicesSliceState])


    if( notificationState == true) {
        return(
            <div id='notification' className={servicesSliceState.notification.active == false ? 'notifications d-flex' : 'd-none'}>
                <p>
    
                </p>
            </div>
            
        )
    } else {}
}