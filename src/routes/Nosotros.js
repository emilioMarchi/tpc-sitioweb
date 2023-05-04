import { NosotrosBio } from "../components/nosotros/NosotrosBio"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece, faPeopleGroup, faComments, faHeadset  } from '@fortawesome/free-solid-svg-icons'

import './nosotros.css'
export const Nosotros = () => {
    return(
        <div>
            <NosotrosBio/>
            <div className='nosotros-presentacion'>
                <h3>¿Por qué elegirnos?</h3>
                <div className='presentacion-item'>
                    <FontAwesomeIcon className='icon' icon={faPeopleGroup} />
                    <h3>
                        Un equipo joven y dinámico donde cada parte es fundamental.
                    </h3>
                </div>
                <div className='presentacion-item'>

                    <FontAwesomeIcon className='icon' icon={faPuzzlePiece} />
                    <h3> 
                        Nos caracteriza el trabajo integral y colaborativo, donde cada miembro del 
                        equipo se ocupa de una tarea específica en sintonía con el resto. 
                    </h3>
                    
                </div>

                <div className='presentacion-item'>
                <FontAwesomeIcon className='icon' icon={faComments} />
                    <h3>
                        Creemos fuertemente que la clave para el "exito" de cada trabajo es 
                        tener una comunicación clara con el cliente.
                    </h3>
                    
                </div>

                <div className='presentacion-item'>
                    <FontAwesomeIcon className='icon' icon={faHeadset} />
                    <h3> Nos preocupamos por  
                        entender que es lo que estás buscando y nos aseguramos de asesorarte 
                        acerca de lo que podemos hacer por tu negocio.  
                    </h3>
                    
                </div>

     
                
            </div>
        </div>
    )
}