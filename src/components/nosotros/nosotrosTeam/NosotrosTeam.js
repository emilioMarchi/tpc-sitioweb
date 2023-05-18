import { NosotrosTeamItem } from "./NosotrosTeamItem"
import './nosotrosTeam.css'


const TeamList = [
    {
        nombre:'Agustina',
        tareas:['Fotografía',',', 'Diseño'],
        urlImg:'/img/users-svg/agus-user.svg',
    },
    {
        nombre:'Bruno',
        tareas:['Marketing digital'],
        urlImg:'/img/users-svg/bruno-user.svg',
    },
    {
        nombre:'Irene',
        tareas:['Relaciones públicas',',','Venta'],
        urlImg:'/img/users-svg/irene-user.svg',
    },
    {
        nombre:'Emilio',
        tareas:['Desarrollo web',',','Diseño'],
        urlImg:'/img/users-svg/emilio-user.svg',
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