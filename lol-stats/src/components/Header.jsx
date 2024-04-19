import Logo from './Logo-Teemo'
import titre from '../images/titre-teemode-stats.webp'
import React, { useState } from 'react';
import MenuNav from './Menu-Nav.jsx';
import './Header.css'

function Header(){
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <>
        <MenuNav isVisible={menuVisible} />
        <header className="App-header">
            <Logo
                toggleMenu={toggleMenu}
                isVisible={menuVisible}
                />
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
        </>
    )
}

export default Header