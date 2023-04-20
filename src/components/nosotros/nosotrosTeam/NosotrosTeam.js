import { NosotrosTeamItem } from "./NosotrosTeamItem"
import './nosotrosTeam.css'


const TeamList = [
    {
        nombre:'Emilio',
        tareas:['Desarrollo web', 'Diseño'],
        urlImg:'/img/agencia.webp',
    },
    {
        nombre:'Agustina',
        tareas:['Desarrollo web', 'Diseño'],
        urlImg:'/img/agencia.webp',
    },
    {
        nombre:'Bruno',
        tareas:['Desarrollo web', 'Diseño'],
        urlImg:'/img/agencia.webp',
    },
    {
        nombre:'Irene',
        tareas:['Desarrollo web', 'Diseño'],
        urlImg:'/img/agencia.webp',
    },
]

const nosotrosTeamElement = document.getElementById('nosotros-team')
const nosotrosTeamElementScroll = nosotrosTeamElement


export const NosotrosTeam = () => {
    console.log(nosotrosTeamElementScroll)
    return(
        <div className='nosotros-team' id='nosotros-team'>
            {
                TeamList.map(item => {
                    return <NosotrosTeamItem nombre={item.nombre} tareas={item.tareas} urlImg={item.urlImg} />
                })
            }
        </div>
    )
}