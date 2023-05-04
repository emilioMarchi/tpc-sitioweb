import React, {useState} from 'react'
import './footer.css'

export const Footer = () => {

    const [navSelected, setNavSelected] = useState(window.location.pathname)


    return(
        <div className='footer'>
            <div className='footer-nav'>
                <ul>
                    <li>
                        <a className={`${navSelected == '/' ? 'selected' : ''}`} href='/'>
                            Inicio   
                        </a>
                    </li>
                    <li>
                        <a className={`${navSelected == '/servicios' ? 'selected' : ''}`} href='/servicios'>
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a className={`${navSelected == '/nosotros' ? 'selected' : ''}`} href='/nosotros'>
                            Nosotros
                        </a>
                    </li>
                    <li>
                        <a className={`${navSelected == '/contacto' || navSelected == '/#contacto' ?  'selected' : ''}`} href='/contacto'>
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