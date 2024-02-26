import React, { useState, useEffect } from 'react';
import Header from "../../components/Header.jsx";
import logoLol from "../../images/logo-lol.webp";
import ImportAll from '../../components/ImportAll.jsx';
import SumInfo from './SumInfo.jsx';
// import Match from './Match.jsx';

let api_key='RGAPI-4b0177af-ebea-455a-8002-952dc4cff567'
let summoner='GuyLeMuscle'


const champIcon = ImportAll(require.context('../../images/champion', false, /\.(png|jpe?g|svg)$/));
const icons = ImportAll(require.context('../../images/profileicon', false, /\.(png|jpe?g|svg)$/))

function Results(){
    const [sumsInfos, setSumsInfos] = useState({});
    const [matchId, setMatchId] = useState([]);
    const [matchData, setMatchData] = useState([]);

    useEffect(() => {
        fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${api_key}`)
            .then(response => response.json())
            .then(result => {setSumsInfos(result);
            return fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${result.puuid}/ids?start=0&count=15&api_key=${api_key}`)
            })
            .then(response => response.json())
            .then(otherResult => {
                setMatchId(otherResult);
                const matchRequests = otherResult.map(matchId => {
                    return fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${api_key}`);
                })
                return Promise.all(matchRequests);
            })
            .then(responses => {
                return Promise.all(responses.map(response => response.json()));
            })
            .then(datas => {
                setMatchData(datas);
            })
            .catch(error => console.error('Erreur lors de la récupération des informations du summoner:', error));
    }, []);

    return (
        <>
            <Header />
            <div className="home-body"> {/* Utilisez une balise <div> au lieu de <body> */}
                <img
                    className='logo-lol'
                    src={logoLol}
                    alt="logo de league of legends"
                />
                <SumInfo 
                    nom={sumsInfos.name} 
                    niveau={sumsInfos.summonerLevel} 
                    icone={icons[sumsInfos.profileIconId+".png"]}
                    // Affichage des informations spécifiques à l'invocateur recherché
                    />
                <div>
                    <h2>Matches:</h2>
                    <ul>
                        {/* <Match

                        /> */}
                        {matchId.map((id, index) => (
                            // <Match
                            //     winBool={matchData[index]?.info?.participants?.find(participant => participant.summonerName === sumsInfos.name)?.win ? 'true' : 'false'}
                            //     gameMode={matchData[index]?.info?.gameMode}
                            //     participants={matchData[index]?.info?.participants?}
                            //     searchedName={sumsInfos.name}
                            // />
                            <div className={`match win-${matchData[index]?.info?.participants?.find(participant => participant.summonerName === sumsInfos.name)?.win ? 'true' : 'false'}`} key={index}>
                                <h1>
                                    <strong>Type de partie : {matchData[index]?.info?.gameMode}</strong>
                                </h1>
                                <div>
                                    {matchData[index]?.info?.participants?.map((participant, indexBis) => (
                                        <span key={indexBis}>
                                            {participant.summonerName === sumsInfos.name ? (
                                                <>
                                                    <img src={champIcon[participant.championName+'.png']} alt={participant.championName} className='champIcons' />
                                                    <strong>{participant.summonerName}</strong><br/>
                                                </>
                                            ) : (
                                                <>
                                                    <img src={champIcon[participant.championName+'.png']} alt={participant.championName} className='champIcons' />
                                                    {participant.summonerName}<br/>
                                                </>
                                            )}
                                        </span>
                                    ))}
                                </div>
                                <br/>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}


export default Results;