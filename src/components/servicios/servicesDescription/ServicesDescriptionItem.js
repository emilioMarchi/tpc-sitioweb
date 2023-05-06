import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ServicesDescriptionItem = ({data}) => {
    return(
        
        <div className='service'>
            <FontAwesomeIcon className='icon' icon={data.icon} />
            
            <h3>{data.description}</h3>
        </div>
      
    )
}