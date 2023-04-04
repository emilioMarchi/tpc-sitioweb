import { Navbar } from "../navbar/Navbar"
import './header.css'
export const Header = ()=> {
    return(
        <div className='header'>
            <div className='header-logo'>
                <img src='/img/logo.png' />
            </div>
            <Navbar/>
        </div>
    )
}