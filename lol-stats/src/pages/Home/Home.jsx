import Header from "../../components/Header.jsx";
import logoLol from "../../images/logo-lol.webp"
import SearchBar from "./Searchbar.jsx";

function Home(){
    return(
        <>
        <Header/>
        <body className="home-body">
            <img
                className='logo-lol'
                src={logoLol}
                alt="logo de league of legends"
            />
            <h2>Rechercher un invocateur (europe uniquement)</h2>
            <SearchBar/>
        </body>
        </>
    )
}

export default Home;