import './serviceBanner.css'

export const ServiceBanner = ({service}) => {
    console.log(service.urlImg)
    return (
        <div className='service-banner' style={{backgroundImage: `url(${service.urlImg})`}}> 
            <div className='service-banner-body' >
                <h3>{service.title}</h3>
                <h4>{service.shortDescription}</h4>
            </div>
        </div>
    )
}