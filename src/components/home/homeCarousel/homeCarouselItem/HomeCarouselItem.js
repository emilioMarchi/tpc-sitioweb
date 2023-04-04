import './homeCarouselItem.css'

export const HomeCarouseItem = () => {
    return(
        <div className='home-carousel-item'>
            <div className='col carousel-item-row title'>
                <h2>title section</h2>
                <h3>It is a long established fact that a reader will be distracted by the readable</h3>
                <button className='carousel-item-button btn'>Conocer más</button>
                
            </div>
            <div className='col carousel-item-row'>
                <img src='/img/img.png' />
            </div>
        </div>
    )
}