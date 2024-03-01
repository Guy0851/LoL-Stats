import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css"

function SearchBar(){

const [summoner, setSummoner] = useState('')
const navigate = useNavigate(); // Initialisation de useHistory

function handleChange(event) {
    setSummoner(event.target.value)
}

function handleSearch() {
    navigate(`/result/${summoner}`); // Rediriger vers l'URL de résultats avec le nom du summoner en paramètre
}

    return (
        <>
            <span>
                <input 
                    type="text" 
                    name="text" 
                    class="input" 
                    placeholder="Summoner Name" 
                    value={summoner}
                    onChange={handleChange}
                />
                <button onClick={handleSearch}>
                    <span>
                        Search
                    </span>
                </button>
            </span>
        </>
    )
}

export default SearchBar