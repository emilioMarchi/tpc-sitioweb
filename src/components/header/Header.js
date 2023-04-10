import { Navbar } from "../navbar/Navbar"
import './header.css'
export const Header = ()=> {
    return(
        <div className='header'>
            <a href={`${window.location.pathname == '/' ? '/#' : '/'}`} className='header-logo'>
                <img src='/img/logo.png' />
            </a>
            <Navbar/>
        </div>
    )
}