import { NosotrosTeamItem } from "./NosotrosTeamItem"
import './nosotrosTeam.css'


const TeamList = [
    {
        nombre:'Emilio',
        tareas:['Desarrollo web', 'Diseño'],
        urlImg:'/img/ecosistema-logo.gif',
    },
    {
        nombre:'Agustina',
        tareas:['Desarrollo web', 'Diseño'],
        urlImg:'/img/ecosistema-logo.gif',
    },
    {
        nombre:'Bruno',
        tareas:['Desarrollo web', 'Diseño'],
        urlImg:'/img/ecosistema-logo.gif',
    },
    {
        nombre:'Irene',
        tareas:['Desarrollo web', 'Diseño'],
        urlImg:'/img/ecosistema-logo.gif',
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