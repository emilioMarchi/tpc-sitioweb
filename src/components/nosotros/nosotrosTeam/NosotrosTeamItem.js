export const NosotrosTeamItem = ({nombre, tareas, urlImg}) => {
    return(
        <div className='nosotros-team-item'>
            <img src={urlImg} />
            <div className='team-body'>
                <h3>{nombre}</h3>
                <div className='team-body-tareas'>
                    {
                        tareas.map((item) => {
                            return(
                                <h4>{item}</h4>
                            )
                        })
                    }

                </div>
                
            </div>
        </div>
    )
}