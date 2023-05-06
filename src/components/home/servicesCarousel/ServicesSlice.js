import {createSlice} from '@reduxjs/toolkit'

export const ServicesSlice = createSlice({
    name:'servicesSlice',
    initialState:{navState:'dev', catState:[], servicesData:[
        {
            cat:'dev',
            services: [
                {
                    title: 'Pagina web',
                    shortDescription: 'Descripcion corta del servicio',
                    longDescription: 'Descripcion extendida y mas detallada del servicio para ofrecer mas informacion a la audiencia',
                    urlImg: '/img/ecosistema-logo.gif',
                    path: '?pagina-web',
                },
                {
                    title: 'Tienda online',
                    shortDescription: 'Descripcion corta del servicio',
                    longDescription: 'Descripcion extendida y mas detallada del servicio para ofrecer mas informacion a la audiencia',
                    urlImg: '/img/ecosistema-logo.gif',
                    path: '?tienda-online',
                },
                
            ]
        },
        {
            cat:'mrk',
            services: [
                {
                    title: 'Campañas para redes sociales',
                    shortDescription: 'Descripcion corta del servicio',
                    longDescription: 'Descripcion extendida y mas detallada del servicio para ofrecer mas informacion a la audiencia',
                    urlImg: '/img/ecosistema-logo.gif',
                    path: '?campana-marketing',
                },
                {
                    title: 'Plan de redes sociales',
                    shortDescription: 'Descripcion corta del servicio',
                    longDescription: 'Descripcion extendida y mas detallada del servicio para ofrecer mas informacion a la audiencia',
                    urlImg: '/img/ecosistema-logo.gif',
                    path: '?plan-marketing',
                },
            ]
        },
        {
            cat:'content',
            services: [
             
                {
                    title: 'Contenido para redes',
                    shortDescription: 'Descripcion corta del servicio',
                    longDescription: 'Descripcion extendida y mas detallada del servicio para ofrecer mas informacion a la audiencia',
                    urlImg: '/img/ecosistema-logo.gif',
                    path: '?redes-contenido',
                },
                {
                    title: 'Contenido de marca',
                    shortDescription: 'Descripcion corta del servicio',
                    longDescription: 'Descripcion extendida y mas detallada del servicio para ofrecer mas informacion a la audiencia',
                    urlImg: '/img/ecosistema-logo.gif',
                    path: '?contenido-marca',
                },
                {
                    title: 'Foto producto',
                    shortDescription: 'Descripcion corta del servicio',
                    longDescription: 'Descripcion extendida y mas detallada del servicio para ofrecer mas informacion a la audiencia',
                    urlImg: '/img/ecosistema-logo.gif',
                    path: '?contenido-producto',
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