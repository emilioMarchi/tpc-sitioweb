const ServiceItem = ({service}) => {
    return(
        <div className='service-list-item'>
                <img src={service.urlImg} />
                <div className='item-body'>
                    <div className='body-info'>
                        <h2>{service.title}</h2>
                        <h3>{service.shortDescription.slice(0, 75)+'...'}</h3>
                    </div>
                    <a href={`/servicios/:${service.path}`} className='btn-dark'>Ver más</a>
                </div>
        </div>
    )
}

export const ServicesList = ({services}) => {

  

    return (
        <div className='services-cat-list'>
            {
                services.map(item => {
                  
                    return(
                        <ServiceItem service={item} />
                    )
                })
            }
        </div>
    )
}