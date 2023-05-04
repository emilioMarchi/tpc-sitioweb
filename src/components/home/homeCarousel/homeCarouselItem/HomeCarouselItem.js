import './homeCarouselItem.css'

export const HomeCarouseItem = ({data}) => {
    return(
        <div className='home-carousel-item'>
            <div className='col carousel-item-row title'>
                <h2>{data.title}</h2>
                <h3>{data.description}</h3>
                <button className='carousel-item-button btn'>Conocer más</button>
                
            </div>
            <div className='col carousel-item-row'>
                <img src='/img/img.png' />
            </div>
        </div>
    )
}