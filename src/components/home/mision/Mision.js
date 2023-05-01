import { ServicesDescription } from '../../servicios/servicesDescription/ServicesDescription'
import '../../servicios/servicesDescription/servicesDescription.css'
import './mision.css'

export const Mision = () => {
    return(
        <div className='mision'>
        
            <div className='mision-section'>
                
                <div className='mision-section-title'>
                    <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</h4>
                    <a href='/servicios' className='btn-dark'>Quiero saber más</a>
                </div>
            </div>
            <div className='mision-section'>
                <ServicesDescription />
            </div>
        </div>
    )
}