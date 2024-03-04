import Duration from "./Duration";

const Match = ({ matchData, sumsInfos, champIcon }) => {
    const winClass = matchData?.info?.participants?.find(participant => participant.summonerName === sumsInfos.name)?.win ? 'true' : 'false';

    
    return (
        <div className={`match win-${winClass}`}>
            <h1>
                <strong>Type de partie : {matchData?.info?.gameMode}</strong>
            </h1>
            <Duration
                gameDuration={matchData?.info?.gameDuration}
            />
            <div className="win-and-loose">
                <div className="winners">
                    <h2>Winners</h2>
                        {matchData?.info?.participants
                            ?.filter(participant => participant.win === true)
                            .map((participant, index) => (
                                <span key={index}>
                                    <img src={champIcon[participant.championName+'.png']} alt={participant.championName} className='champIcons' />
                                    {participant.summonerName === sumsInfos.name ? (
                                        <strong> {participant.summonerName} {participant.kills}/{participant.deaths}/{participant.assists}</strong>
                                        ) : (
                                            <> {participant.summonerName} {participant.kills}/{participant.deaths}/{participant.assists}</>
                                            )}
                                    <br/>
                                </span>
                        ))}
                    
                </div>
                <div className="loosers">
                    <h2>Loosers</h2>
                        {matchData?.info?.participants
                            ?.filter(participant => participant.win === false)
                            .map((participant, index) => (
                                <span key={index}>
                                    {participant.summonerName === sumsInfos.name ? (
                                        <strong>{participant.kills}/{participant.deaths}/{participant.assists} {participant.summonerName} </strong>
                                        ) : (
                                            <> {participant.kills}/{participant.deaths}/{participant.assists} {participant.summonerName} </>
                                            )}
                                        <img src={champIcon[participant.championName+'.png']} alt={participant.championName} className='champIcons' />
                                    <br/>
                                </span>
                        ))}
                    
                </div>            
            </div>
                <br/>
        </div>
    );
};

export default Match;