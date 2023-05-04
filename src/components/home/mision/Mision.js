import { ServicesDescription } from '../../servicios/servicesDescription/ServicesDescription'
import '../../servicios/servicesDescription/servicesDescription.css'
import './mision.css'

export const Mision = () => {
    return(
        <div className='mision'>
        
            <div className='mision-section'>
                
                <div className='mision-section-title'>
                    <h4>En <b>Tres punto cero</b> entendemos al desarrollo del ecosistema digital
                    de una marca como la orquestación de herramientas y técnicas correlacionadas para
                    promover un negocio a través de internet.
                    </h4>
                    <a href='/servicios' className='btn-dark'>Quiero saber más</a>
                </div>
            </div>
            <div className='mision-section'>
                <ServicesDescription />
            </div>
        </div>
    )
}