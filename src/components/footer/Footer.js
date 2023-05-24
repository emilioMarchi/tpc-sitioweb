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
            <div className='d-flex justify-content-evenly align-items-center p-2 mb-0 contact-info'>
                <div className='d-flex align-items-center info'>
                    <p className='m-2'>tpcagencia@gmail.com</p>
                    
                </div>
                <div className='icons-bar'>
                    
                    <a href='https://www.instagram.com/trespuntocero.ar/' target='_black' className='icon'>
                        <img src='/img/icons/ig-black.png' />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}