import { ServicesCarouselItem } from "./servicesCarouselItem/ServicesCarouselItem"

export const ServicesCarousel = () => {
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <ServicesCarouselItem/>
                </div>
                <div class="carousel-item">
                    <ServicesCarouselItem/>
                </div>
                <div class="carousel-item">
                    <ServicesCarouselItem/>
                </div>
            </div>
        </div>
    )
}