function Match(props){
    return(
        <>
            {props.matches.map((id, index) => (
                            // <Match
                            //     winBool={matchData[index]?.info?.participants?.find(participant => participant.summonerName === sumsInfos.name)?.win ? 'true' : 'false'}
                            //     gameMode={matchData[index]?.info?.gameMode}
                            //     participants={matchData[index]?.info?.participants?}
                            //     searchedName={sumsInfos.name}
                            // />
                            <div className={`match win-${props.matchData[index]?.info?.participants?.find(participant => participant.summonerName === props.searchedSum.name)?.win ? 'true' : 'false'}`} key={index}>
                                <h1>
                                    <strong>Type de partie : {props.matchData[index]?.info?.gameMode}</strong>
                                </h1>
                                <ul>
                                    {props.matchData[index]?.info?.participants?.map((participant, indexBis) => (
                                        <span key={indexBis}>
                                            {participant.summonerName === props.searchedSum.name ? (
                                                <>
                                                    <img src={props.champIcon[participant.championName+'.png']} alt={participant.championName} className='champIcons' />
                                                    <strong>{participant.summonerName}</strong><br/>
                                                </>
                                            ) : (
                                                <>
                                                    <img src={props.champIcon[participant.championName+'.png']} alt={participant.championName} className='champIcons' />
                                                    {participant.summonerName}<br/>
                                                </>
                                            )}
                                        </span>
                                    ))}
                                </ul>
                                <br/>
                            </div>
                        ))}
        </>
    )
}

export default Match;