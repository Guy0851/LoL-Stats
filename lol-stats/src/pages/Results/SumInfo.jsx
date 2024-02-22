function SumInfo(props){
    return(
        <div>
            <h2>Informations de l'invocateur:</h2>
            <p><img src={props.icone} alt="icone de l'invocateur" className='sumIcon'/> {props.nom}</p><br/>
            <p>Niveau d'invocateur : <strong>{props.niveau}</strong></p>
        </div>
    )

}

export default SumInfo