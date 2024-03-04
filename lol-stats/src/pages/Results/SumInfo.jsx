import React, { useState, useEffect } from 'react';
import './Results.css'
import ImportAll from '../../components/ImportAll.jsx';

const rankIcon = ImportAll(require.context('../../images/rank', false, /\.(png|jpe?g|svg)$/));

function SumInfo(props){
    const [sumData, setSumData] = useState([]);

    useEffect(() => {
        // fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/5xcU9XDdloz7X6V6PJj42GJe8To8hqJqc9HGQdB3yCk09NM?api_key=RGAPI-1a7d2ed0-5437-4751-8972-adf55f062485`)
        fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${props.sumId}?api_key=${props.api_key}`)
        .then(response => response.json())
        .then(result => {
            const filteredData = result.filter(entry => entry.queueType === "RANKED_SOLO_5x5");
            setSumData(filteredData);
        })
        .catch(error => console.error('Erreur Lors de la récupération du rang', error));
    }, [props.api_key, props.sumId]);

console.log(sumData)
    return(
        <div className="sum-data">
            <h2>Informations de <br/> l'invocateur:</h2>
            <div className="sum-infos">
            <img src={props.icone} alt="icone de l'invocateur" className='sumIcon'/>
                <p>{props.nom}<br/> Level <br/> <strong>{props.niveau}</strong></p>
            </div>
            <div className='rank'>
                {sumData.map((data, index) => (
                    <div className='rank-container'>
                        <img src={rankIcon[data.tier+'.png']} alt='rank' className='rankIcons' />
                    </div>
                ))}
                {sumData.map((data, index) => (
                    <div key={index} className='rank-info'>
                        <><strong>{data.tier} {data.rank}</strong></>
                        <>{data.leaguePoints} LP</>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default SumInfo