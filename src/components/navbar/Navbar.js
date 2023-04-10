import React, {useState} from 'react'
import './navbar.css'

export const Navbar = () => {

    const [navSelected, setNavSelected] = useState(window.location.pathname)

    console.log(navSelected)
 
    return(
        <nav class=" navbar-expand-lg navbar-dark navbar">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class={`nav-link active link ${navSelected == '/' ? 'selected' : ''}`} aria-current="page" href="/"
                            
                        >Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class={`nav-link active link ${navSelected == '/servicios' ? 'selected' : ''}`}  href="/servicios" 
                           
                        >Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class={`nav-link active link ${navSelected == '/nosotros' ? 'selected' : ''}`}  href="/nosotros"
                           
                        >Nosotros</a>
                    </li>
                    <li class="nav-item link">
                        <a class={`nav-link active link ${navSelected == '/contacto' ? 'selected' : ''}`}  href="/contacto"
                            
                        >Contacto</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}