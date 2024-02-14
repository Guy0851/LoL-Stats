import logo from '../images/Logo-LoL-Stats.webp'
import titre from '../images/titre-teemode-stats.webp'

function Header(){
    return (
        <header className="App-header">
            <a href='/home'>
                <img
                    className='logo-tamo'
                    src={logo}
                    alt="teemo-3D"
                />
            </a>
            <a href='/home'>
                <img
                    className='titre-teemode'
                    src={titre}
                    alt='titre-en-ballon'
                />
            </a>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}

export default Header