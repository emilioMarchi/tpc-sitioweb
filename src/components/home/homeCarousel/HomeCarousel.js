import Carousel from 'react-bootstrap/Carousel';
import { HomeCarouseItem } from "./homeCarouselItem/HomeCarouselItem"
import './homeCarousel.css'

export const HomeCarousel = () => {
    return(
        <Carousel interval={2500} controls={false} indicators={false}>
            <Carousel.Item>
                    <HomeCarouseItem/>
            </Carousel.Item>
            <Carousel.Item>
                    <HomeCarouseItem/>
            </Carousel.Item>
            <Carousel.Item>
                    <HomeCarouseItem/>
            </Carousel.Item>
        </Carousel>
       
    )
}