const Match = ({ matchData, sumsInfos, champIcon }) => {
    const winClass = matchData?.info?.participants?.find(participant => participant.summonerName === sumsInfos.name)?.win ? 'true' : 'false';
    
    return (
        <div className={`match win-${winClass}`}>
            <h1>
                <strong>Type de partie : {matchData?.info?.gameMode}</strong>
            </h1>
            <ul>
                {matchData?.info?.participants?.map((participant, index) => (
                    <span key={index}>
                        <img src={champIcon[participant.championName+'.png']} alt={participant.championName} className='champIcons' />
                        {participant.summonerName === sumsInfos.name ? (
                            <strong>{participant.summonerName}</strong>
                        ) : (
                            participant.summonerName
                        )}
                        <br/>
                    </span>
                ))}
            </ul>
            <br/>
        </div>
    );
};

export default Match;