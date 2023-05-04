const ServiceItem = ({service}) => {
    return(
        <div className='service-list-item'>
                <img src='/img/ecosistema-logo.gif' />
                <div className='item-body'>
                    <div className='body-info'>
                        <h2>{service}</h2>
                        <h3>Descripcion de servicio especifico y breve bla bla</h3>
                    </div>
                    <button className='btn-dark'>Ver más</button>
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