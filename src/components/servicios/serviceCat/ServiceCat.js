import { ServiceCatItem } from './ServiceCatItem'
import './serviceCat.css'
import {useSelector, useDispatch} from 'react-redux'



export const ServiceCat = () => {

    const dispatch = useDispatch()
    const servicesSliceState = useSelector(state=>state.servicesSlice)
    const servicesData = servicesSliceState.servicesData
    console.log(servicesData)
    
    return(
        <div >
            {
                servicesData.map((item => {
                    return(
                        <ServiceCatItem title={item.title} services={item.services} urlImgBanner={item.urlImgBanner}/>
                    )
                }))
            }
        </div>
    )
}