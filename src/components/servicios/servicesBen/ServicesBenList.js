import './servicesBen.css'

const servicesBenList = [
    {
        text:`Marketing digital para conocer y llegar a tu audiencia`,
        imgUrl:'/img/img.png'
    },
    {
        text:`Un sitio web para estar en linea y conectar con tu público`,
        imgUrl:'/img/ecommerce.png'
    },
    {
        text:`Contenido de tu marca para mostrar tu producto`,
        imgUrl:'/img/img.png'
    }
]

const ServiceBenItem = ({text, imgUrl}) => {
    return(
        <div className='service-ben-item' style={{backgroundImage: `url(${imgUrl})`}}>
            <h3>{text}
            </h3>
            <a href='#'>Ver más</a>
        </div>
    )
}

export const ServicesBenList = () => {
    return(
        <div className='services-ben-list'>
            {
                servicesBenList.map(item => {
                    return(
                        <ServiceBenItem text={item.text} imgUrl={item.imgUrl} />
                    )
                })
            }
       
        </div>
    )
}