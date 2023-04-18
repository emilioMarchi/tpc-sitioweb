
//components
import { HomeCarousel } from "../components/home/homeCarousel/HomeCarousel"
import { Mision } from "../components/home/mision/Mision"
import { ServicesCarousel } from "../components/home/servicesCarousel/ServicesCarousel"
import { Contact } from "../components/contact/Contact"

import './home.css'

export const Home = () => {
    return(
        <div className='home pt-page'>
            <HomeCarousel/>
            <div className='home-title'>
                <h1>Diseñamos, planificamos y desarrollamos tu estrategia digital</h1>
            </div>
            <div className='home-cotize-button'>
                <h3>Contanos que solución estás buscando</h3>
                <button className='btn-dark'>Contanos</button>
            </div>
            <Mision/>
            <ServicesCarousel/>
            <Contact/>
        </div>  
    )
}