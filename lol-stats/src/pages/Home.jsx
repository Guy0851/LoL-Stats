import Header from "../components/Header.jsx";
import logoLol from "../images/logo-lol.webp";

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
            </body>
        </>
    )
}

export default Home;