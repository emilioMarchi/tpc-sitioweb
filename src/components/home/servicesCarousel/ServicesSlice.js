import {createSlice} from '@reduxjs/toolkit'

export const ServicesSlice = createSlice({
    name:'servicesSlice',
    initialState:{navState:'dev', catState:[], servicesData:[
        {
            cat:'dev',
            services: [
                {
                    title: 'Pagina web',
                    description: 'Descripcion de servicio'
                },
                {
                    title: 'Tienda online',
                    description: 'Descripcion de servicio'
                },
            ]
        },
        {
            cat:'mrk',
            services: [
                {
                    title: 'Campañas para redes sociales',
                    description: 'Descripcion de servicio'
                },
                {
                    title: 'Plan para redes',
                    description: 'Descripcion de servicio'
                },
            ]
        },
        {
            cat:'content',
            services: [
                {
                    title: 'Contenido para redes',
                    description: 'Descripcion de servicio'
                },
                {
                    title: 'Contenido de marca',
                    description: 'Descripcion de servicio'
                },
                {
                    title: 'Foto producto',
                    description: 'Descripcion de servicio'
                },
            ]
        },
    ]},
    reducers: { 
        changeNavState: (state, action)=> {
            state.navState = action.payload
        },
        pushCatState: (state, action)=> {
            state.catState.push(action.payload)
        },
    }
})

export const {changeNavState} = ServicesSlice.actions 
export default ServicesSlice.reducer