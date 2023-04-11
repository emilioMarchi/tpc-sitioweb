import Carousel from 'react-bootstrap/Carousel';
import { ServicesCarouselItem } from "./servicesCarouselItem/ServicesCarouselItem"

export const ServicesCarousel = () => {
    return(
        <Carousel interval={2500} controls={false} indicators={false}>
            <Carousel.Item>
                    <ServicesCarouselItem/>
            </Carousel.Item>
            <Carousel.Item>
                    <ServicesCarouselItem/>
            </Carousel.Item>
            <Carousel.Item>
                    <ServicesCarouselItem/>
            </Carousel.Item>
        </Carousel>
    )
}