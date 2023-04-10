import FormContact from "./Form/FormContact"
import './contact.css'

export const Contact = () => {
    return(
        <div className='contact'>
            <div className='contact-title'>
                <h4>Dejanos un mensaje o contactanos por donde te quede más cómodo</h4>
            </div>
            <FormContact />
        </div>
    )
} 