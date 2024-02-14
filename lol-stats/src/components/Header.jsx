import logo from '../images/Logo-LoL-Stats.webp'

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