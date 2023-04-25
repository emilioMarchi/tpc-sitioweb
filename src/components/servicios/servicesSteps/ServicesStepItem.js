import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './servicesSteps.css'

export const ServicesStepItem = ({data}) => {
    console.log(data.icon)

    return (
        <div className='services-step-item'>
            <FontAwesomeIcon className='services-step-icon' icon={data.icon} />
            <div className='col step-item-row title'>
                    <h2>{data.title}</h2>
                    <h3>{data.text}</h3>
                    
            </div>
        </div>
    )
}