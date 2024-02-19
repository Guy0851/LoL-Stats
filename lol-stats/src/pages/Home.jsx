import React, { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import logoLol from "../images/logo-lol.webp";

let api_key='RGAPI-b4a2437b-52db-4cf5-9f13-8aec75d59fdf'
let summoner='SprintRun08'



function Home(){
    const [sumsInfos, setSumsInfos] = useState({});
    const [matchId, setMatchId] = useState([]);
    const [matchData, setMatchData] = useState([])

    useEffect(() => {
        fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${api_key}`)
            .then(response => response.json())
            .then(result => {setSumsInfos(result);
            return fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${result.puuid}/ids?start=0&count=10&api_key=${api_key}`)
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
                // Traiter les réponses de chaque requête pour obtenir les informations des matchs
                return Promise.all(responses.map(response => response.json()));
            })
            .then(datas => {
                // Mettre à jour l'état avec les informations des matchs
                setMatchData(datas);
            })
            .catch(error => console.error('Erreur lors de la récupération des informations du summoner:', error));
    }, []); // Les crochets vides signifient que cet effet ne dépend d'aucune valeur et ne doit être exécuté qu'une seule fois

    return (
        <>
            <Header />
            <div className="home-body"> {/* Utilisez une balise <div> au lieu de <body> */}
                <img
                    className='logo-lol'
                    src={logoLol}
                    alt="logo de league of legends"
                />
                <div>
                    <h2>Informations du Summoner:</h2>
                    <p>Nom: {sumsInfos.name}</p>
                    {/* Afficher d'autres informations du summoner ici */}
                </div>
                <div>
                    <h2>Matches:</h2>
                    <ul>
                        {matchId.map((id, index) => (
                            <li key={index}>
                                <strong>Match ID: {id} </strong>
                                <ul>
                                    {matchData[index]?.info?.participants?.map((participant, indexBis) => (
                                        <li key={indexBis}>
                                            Participant n°{indexBis + 1} : {participant.summonerName}
                                        </li>
                                    ))}
                                </ul>
                                <br/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}


export default Home;