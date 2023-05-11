import './serviceBanner.css'

export const ServiceBanner = ({service}) => {
    console.log(service.urlImg)
    return (
        <div className='service-banner pt-page' > 
            <div className='banner-body-container' style={{backgroundImage: `url(${service.urlImg})`}}>
                <div className='service-banner-body' >
                    <h3>{service.title}</h3>
                    <h4>{service.shortDescription}</h4>
                </div>
                <img />
            </div>
            <div className='d-flex info'>
                <div className='service-longDescription'>
                    
                    <h3>{service.longDescription}</h3>
                </div>
                <div className='service-banner-items'>
                    {
                        service.itemsDescription.map((item)=>{
                            return(
                                <div className='service-item'>
                                    <h4>{item}</h4>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}