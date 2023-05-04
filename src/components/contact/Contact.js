import FormContact from "./Form/FormContact"
import './contact.css'

export const Contact = () => {
    return(
        <div className='contact' id='contacto'>
            <div className='contact-title'>
                <h4>Dejanos un mensaje o contactanos por donde te quede más cómodo</h4>
                <div className='icons-bar'>
                    <div className='icon'>
                        <img src='/img/icons/wpp-black.png' />
                    </div>
                    <div className='icon'>
                        <img src='/img/icons/ig-black.png' />
                    </div>
                    
                </div>
            </div>
            <FormContact />
        </div>
    )
} 