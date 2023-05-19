import {FormContact} from "./Form/FormContact"
import './contact.css'
import { useEffect } from "react"

export const Contact = () => {

  
    useEffect(() => {
        
    }, [])

    return(
        <div className='contact' id='contacto'>
            <div className='contact-title'>
                <h4>Dejanos un mensaje o contactanos por donde te quede más cómodo</h4>
                <div className='icons-bar'>
                    
                    <a href='https://www.instagram.com/trespuntocerosd/' target='_black' className='icon'>
                        <img src='/img/icons/ig-black.png' />
                    </a>
                    
                </div>
            </div>
            <FormContact />
        </div>
    )
} 