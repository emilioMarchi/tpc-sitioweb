import { NosotrosTeam } from './nosotrosTeam/NosotrosTeam'
import './nosotrosBio.css'

export const NosotrosBio = () => {
    return(
        <div className='nosotros-bio pt-page'>

            <div className='bio-img'></div>
            <div className='bio-body'>
                <h2>Quiénes somos</h2>
                <NosotrosTeam />
            </div>
            
        </div>
    )
}