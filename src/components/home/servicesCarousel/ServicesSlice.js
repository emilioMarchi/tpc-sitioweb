import {createSlice} from '@reduxjs/toolkit'

export const ServicesSlice = createSlice({
    name:'servicesSlice',
    initialState:{navState:'dev', catState:[], servicesData:[
        {
            cat:'dev',
            services: [
                {
                    title: 'Tienda online',
                    shortDescription: 'Una tienda en línea es una plataforma en línea donde los clientes pueden comprar productos y servicios desde cualquier lugar con conexión a internet, ofreciendo mayor alcance, comodidad y personalización',
                    longDescription: 'Una tienda en línea es una plataforma en línea donde los clientes pueden comprar productos y servicios desde la comodidad de su hogar, oficina o cualquier otro lugar con conexión a internet. La tienda en línea proporciona una experiencia de compra virtual, en la que los usuarios pueden ver los productos, seleccionar lo que desean comprar, hacer el pago y recibir su pedido en su dirección.',
                    urlImg: '/img/services-png/ecommerce.svg',
                    path: '?tienda-online',
                    itemsDescription: [
                        'Mayor alcance: una tienda en línea permite que los negocios lleguen a clientes de todo el mundo, ampliando su alcance más allá de su ubicación física',
                        'Menores costos: la operación de una tienda en línea es más económica que una tienda física, ya que no requiere de gastos en alquiler de local comercial, servicios públicos, decoración, entre otros',
                        'Mayor comodidad: los clientes pueden realizar compras desde cualquier lugar y en cualquier momento, sin tener que salir de su hogar u oficina, lo que representa una gran comodidad',
                        'Personalización: una tienda en línea permite personalizar la experiencia de compra del cliente con ofertas personalizadas y recomendaciones basadas en sus intereses y preferencias',
                        'Mayor control: la tienda en línea proporciona mayor control sobre la gestión de inventario y la administración de pedidos, lo que permite una mejor organización y eficiencia en el proceso de ventas',
                    ]
                },
                {
                    title: 'Página web',
                    shortDescription: 'Una página web es un sitio en línea que contiene información sobre una empresa, organización, producto o servicio. Es accesible a través de internet y puede ser visitada por cualquier persona con conexión a la red',
                    longDescription: 'Descripción general: Una página web es un elemento fundamental para cualquier negocio o entidad que busque tener presencia en línea. Permite que los usuarios encuentren información sobre los productos o servicios ofrecidos, contacten a la empresa, realicen compras en línea y más. Además, una página web bien diseñada y estructurada puede ayudar a mejorar la imagen de la marca y aumentar la visibilidad en los motores de búsqueda',
                    urlImg: '/img/services-png/web-page.svg',
                    path: '?pagina-web',
                    itemsDescription: [
                        'Presencia en línea: una página web proporciona una presencia en línea para su empresa u organización, lo que permite a los clientes encontrar información sobre sus productos y servicios en cualquier momento',
                        'Mayor alcance: una página web permite llegar a clientes potenciales en todo el mundo, lo que aumenta su alcance y visibilidad en el mercado',
                        'Mayor credibilidad: tener una página web bien diseñada y actualizada puede aumentar la credibilidad de su empresa u organización, lo que puede atraer a más clientes',
                        'Comunicación con clientes: una página web permite a los clientes comunicarse con la empresa a través de formularios de contacto, chats en vivo y otras herramientas, lo que facilita la atención al cliente',
                        'Aumento de ventas: una página web bien diseñada y optimizada puede aumentar las ventas al permitir a los clientes comprar productos y servicios en línea',
                    ]
                },
                
            ]
        },
        {
            cat:'mrk',
            services: [
                {
                    title: 'Campañas para redes sociales',
                    shortDescription: 'Una campaña de marketing de redes sociales es una estrategia publicitaria en línea que utiliza las redes sociales para promocionar una marca, producto o servicio',
                    longDescription: 'Una campaña de marketing de redes sociales implica la creación y distribución de contenido en las redes sociales para atraer y comprometer a los clientes. Puede incluir publicaciones de texto, imágenes, videos y anuncios pagados, y se enfoca en llegar a la audiencia objetivo en las redes sociales',
                    urlImg: '/img/services-png/campana-mkt.svg',
                    path: '?campana-marketing',
                    itemsDescription: [
                        'Mayor alcance: las redes sociales tienen una gran cantidad de usuarios activos, lo que permite que su marca llegue a una audiencia más amplia',
                        'Mayor interacción: las redes sociales permiten una interacción más directa entre los clientes y la marca, lo que puede aumentar el compromiso y la fidelidad del cliente',
                        'Segmentación de audiencia: las redes sociales ofrecen opciones avanzadas de segmentación de audiencia para asegurar que su campaña de marketing se dirija a las personas adecuadas',
                        'Resultados medibles: las redes sociales ofrecen una gran cantidad de herramientas de análisis y seguimiento, lo que permite medir y ajustar los resultados de la campaña en tiempo real',
                        'Costo-efectividad: en comparación con otros medios de publicidad, las redes sociales pueden ser más asequibles y ofrecer un mayor retorno de inversión',
                    ]
                },
                {
                    title: 'Plan de redes sociales',
                    shortDescription: 'Un plan de marketing para redes sociales es una estrategia detallada que se utiliza para promocionar una marca, producto o servicio en las redes sociales',
                    longDescription: 'Un plan de marketing para redes sociales incluye objetivos, estrategias, tácticas y herramientas para alcanzar a la audiencia objetivo en las redes sociales y lograr los objetivos de marketing de la empresa. Puede incluir la creación y distribución de contenido, la publicidad en las redes sociales y la interacción con los clientes en las redes sociales',
                    urlImg: '/img/services-png/plan-mkt.svg',
                    path: '?plan-marketing',
                    itemsDescription: [
                        'Mejora la presencia en línea: un plan de marketing para redes sociales ayuda a mejorar la presencia en línea de una empresa, lo que puede aumentar la visibilidad y la credibilidad de la marca',
                        'Alcanza una audiencia más amplia: la estrategia adecuada en las redes sociales puede ayudar a alcanzar una audiencia más amplia, lo que aumenta el alcance de la empresa y su alcance',
                        'Interacción con los clientes: las redes sociales permiten una interacción más directa entre los clientes y la empresa, lo que puede aumentar la fidelidad del cliente y mejorar la reputación de la marca',
                        
                    ]
                },
            ]
        },
        {
            cat:'content',
            services: [
             
                {
                    title: 'Contenido para redes',
                    shortDescription: 'El contenido para redes sociales es cualquier tipo de material, ya sea visual o escrito, que se comparte en plataformas de redes sociales',
                    longDescription: 'El contenido para redes sociales es una parte fundamental del marketing digital y se refiere a todo el material que se comparte en plataformas de redes sociales para promocionar una marca, producto o servicio. Puede incluir imágenes, videos, textos, infografías, entre otros tipos de contenido. El objetivo principal es atraer la atención de los usuarios y generar interacciones y engagement',
                    urlImg: '/img/services-png/contenido-redes.svg',
                    path: '?redes-contenido',
                    itemsDescription: [
                        'Genera mayor alcance y visibilidad de la marca',
                        'Atrae la atención de los usuarios y puede generar interacciones y engagement',
                        'Puede ser utilizado para informar y educar a los clientes sobre los productos o servicios ofrecidos por la marca',
                        'Contribuye a crear una comunidad alrededor de la marca, lo que puede generar lealtad y fidelización de los clientes',
                        'Puede ser utilizado para promocionar descuentos, ofertas y promociones especiales, lo que puede aumentar las ventas',
                    ]
                },
                {
                    title: 'Identidad de marca',
                    shortDescription: 'La identidad de marca es la representación visual y emocional de una marca, que incluye su logotipo, colores, tipografía y otros elementos que ayudan a crear una conexión entre la marca y su audiencia',
                    longDescription: 'La identidad de marca es esencial para cualquier empresa, ya que ayuda a diferenciarla de sus competidores y a crear una conexión emocional con su audiencia. La identidad de marca se utiliza en todas las comunicaciones de la empresa, incluyendo su sitio web, publicidad, materiales de marketing, productos y servicios',
                    urlImg: '/img/services-png/identidad-marca.svg',
                    path: '?contenido-marca',
                    itemsDescription: [
                        'Diferenciación: La identidad de marca ayuda a diferenciar una empresa de sus competidores, lo que puede ayudar a atraer y retener a los clientes',
                        'Reconocimiento de marca: La identidad de marca ayuda a los clientes a identificar rápidamente una marca y recordarla a largo plazo',
                        'Credibilidad: Una identidad de marca sólida y coherente puede mejorar la percepción de la marca entre los clientes y aumentar su credibilidad',
                        'Fidelidad de los clientes: La identidad de marca puede ayudar a crear una conexión emocional con los clientes, lo que puede aumentar la fidelidad de los clientes y la repetición de compras',
                        'Atractivo visual: Una identidad de marca bien diseñada puede ser visualmente atractiva y memorable, lo que puede aumentar la visibilidad y el atractivo de la marca'
                    ]
                },
                {
                    title: 'Foto producto',
                    shortDescription: 'La fotografía de producto se refiere a la técnica de tomar fotografías de alta calidad de productos para su uso en marketing y ventas',
                    longDescription: 'La fotografía de producto es una técnica esencial en el mundo del comercio electrónico y el marketing digital. Consiste en tomar fotografías profesionales y atractivas de productos, de manera que se puedan utilizar en catálogos, sitios web, redes sociales y otras plataformas de venta en línea. La fotografía de producto permite que los clientes potenciales vean con claridad los detalles de un producto, lo que puede aumentar la confianza en la marca y la probabilidad de compra',
                    urlImg: '/img/services-png/foto-producto.svg',
                    path: '?contenido-producto',
                    itemsDescription: [
                        '•	Mejora la calidad visual del catálogo o sitio web de la marca',
                        '•	Aumenta la confianza de los clientes potenciales en el producto y la marca',
                        '•	Permite que los clientes vean claramente los detalles y características del producto',
                        '•	Puede ayudar a aumentar las ventas y el reconocimiento de la marca',
                        '•	Ayuda a la marca a destacar entre la competencia que no utiliza fotografías de alta calidad de sus productos',
                    ]
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