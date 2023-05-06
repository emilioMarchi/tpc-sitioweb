import './homeCarouselItem.css'

export const HomeCarouseItem = ({data}) => {
    return(
        <div className='home-carousel-item' style={{backgroundImage: 'url(/img/img.png)'}}>
            <div className='col carousel-item-row title'>
                <h2>{data.title}</h2>
                <h3>{data.description}</h3>
                <a href='/servicios' className='carousel-item-button btn'>Conocer más</a>
                
            </div>
            
        </div>
    )
}