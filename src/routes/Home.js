
//components
import { HomeCarousel } from "../components/home/homeCarousel/HomeCarousel"
import { Mision } from "../components/home/mision/Mision"
import { ServicesCarousel } from "../components/home/servicesCarousel/ServicesCarousel"
import { Contact } from "../components/contact/Contact"

import './home.css'

export const Home = () => {
    return(
        <div className='home'>
            <HomeCarousel/>
            <div className='home-title'>
                <h1>Diseñamos, Planificamos, Desarrollamos</h1>
            </div>
            <div className='home-cotize-button'>
                <h3>Cotiza tu proyecto en un par de clicks. Contactanos para obtener un presupuesto</h3>
                <button className='btn-dark'>Cotizar</button>
            </div>
            <Mision/>
            <ServicesCarousel/>
            <Contact/>
        </div>  
    )
}