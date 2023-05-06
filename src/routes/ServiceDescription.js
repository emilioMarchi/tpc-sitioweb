import { useLocation } from "react-router"
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { ServiceBanner } from "../components/serviceBanner/serviceBanner"




export const ServiceDescription = () => {

    const dispatch = useDispatch()
    const servicesData = useSelector(state=>state.servicesSlice.servicesData)
    const navState = useSelector(state=>state.servicesSlice.navState)
    const services = []
    const [service, setService] = useState()
   
    const path = useLocation().search

    const item = servicesData.map((item)=> {
        return(
            item.services.map(item => {
                return item
            })
            )
    })

    const fun = () => {
        item.map(i => {
            i.map(x => {
                services.push(x)
            })
        })
    }
    const serviceFun = () => {
        const x = services.find(item => {
            return item.path == path
        })
        
        setService(x)
        return x
    }

    
    useEffect(()=>{
        fun()
        serviceFun()

       console.log(navState)
    }, [])

       
    
   
    if(service != undefined) {
        return(
            <ServiceBanner service={service} />
        )
    } else {
        return(
            <div>
                <h2>no hay nada</h2>
            </div>
        )
    }
}