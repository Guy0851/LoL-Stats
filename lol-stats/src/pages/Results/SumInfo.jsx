function SumInfo(props){
    return(
        <div className="sum-data">
            <h2>Informations de <br/> l'invocateur:</h2>
            <div className="sum-infos">
            <img src={props.icone} alt="icone de l'invocateur" className='sumIcon'/>
                <p>{props.nom}<br/> Level <br/> <strong>{props.niveau}</strong></p>
            </div>
            
        </div>
    )

}

export default SumInfo