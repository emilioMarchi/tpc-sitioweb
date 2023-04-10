import './footer.css'

export const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-nav'>
                <ul>
                    <li>
                        <a href='/incio'>
                            Inicio   
                        </a>
                    </li>
                    <li>
                        <a href='/servicios'>
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a href='/nosotros'>
                            Nosotros
                        </a>
                    </li>
                    <li>
                        <a href='/contacto'>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
            <line></line>
            <div className='icons-bar'>
                <div className='icon'>
                    <img src='/img/icons/wpp-black.png' />
                </div>
                <div className='icon'>
                    <img src='/img/icons/ig-black.png' />
                </div>
                
            </div>
        </div>
    )
}