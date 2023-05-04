export const ServicesDescriptionItem = ({data}) => {
    return(
        
        <div className='service'>
            <img src={data.urlImg} />
            <h3>{data.description}</h3>
        </div>
      
    )
}