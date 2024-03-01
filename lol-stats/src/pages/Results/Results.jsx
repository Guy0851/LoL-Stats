import React, { useState, useEffect } from 'react';
import Header from "../../components/Header.jsx";
import logoLol from "../../images/logo-lol.webp";
import ImportAll from '../../components/ImportAll.jsx';
import SumInfo from './SumInfo.jsx';
import Match from './Match.jsx';
import { useParams } from 'react-router-dom';

let api_key='RGAPI-513eae97-904b-4433-b0e4-bdeddbce5aa0'


const champIcon = ImportAll(require.context('../../images/champion', false, /\.(png|jpe?g|svg)$/));
const icons = ImportAll(require.context('../../images/profileicon', false, /\.(png|jpe?g|svg)$/))

function Results(){
    const { summoner } = useParams();
    console.log(summoner)


    const [sumsInfos, setSumsInfos] = useState({});
    const [matchId, setMatchId] = useState([]);
    const [matchData, setMatchData] = useState([]);

    useEffect(() => {
        //https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/GuyLeMuscle/4669?api_key=RGAPI-6a874b6e-e040-47bf-ab94-b3d4585e596e
        // fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summoner}/${tag}?api_key=${api_key}`)
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
    }, [summoner]);

    return (
        <>
            <Header />
            <div className="home-body"> {/* Utilisez une balise <div> au lieu de <body> */}
                <img
                    className='logo-lol'
                    src={logoLol}
                    alt="logo de league of legends"
                />
                <div className='matches_and_infos'>
                    <h2>Matches:</h2>
                    <div className='searched-infos'>
                        
                        <SumInfo 
                            nom={sumsInfos.name} 
                            niveau={sumsInfos.summonerLevel} 
                            icone={icons[sumsInfos.profileIconId+".png"]}
                            // Affichage des informations spécifiques à l'invocateur recherché
                            />
                        
                        <div>
                            {matchId.map((id, index) => (
                                <Match
                                key={index}
                                matchData={matchData[index]}
                                sumsInfos={sumsInfos}
                                champIcon={champIcon}
                                />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Results;