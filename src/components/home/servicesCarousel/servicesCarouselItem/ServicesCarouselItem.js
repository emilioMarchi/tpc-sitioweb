import './servicesCarouselItem.css'
export const ServicesCarouselItem = () => {
    return(
        <div className='services-carousel-item'>
         
            <div className='col carousel-item-row img'>
                <img src='/img/img.png' />
            </div>
            <div className='col carousel-item-row title'>
                    <h2>Campaña de marketing digital</h2>
                    <h3>It is a long established fact that a reader will be distracted by the readable</h3>
                    <button className='carousel-item-button btn'>Conocer servicio</button>
                    
                </div>
        </div>
    )
}