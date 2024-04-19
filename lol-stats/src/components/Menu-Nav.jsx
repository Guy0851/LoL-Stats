function MenuNav({isVisible}){
    return (
        <div className={`menu-nav ${isVisible ? 'visible' : ''}`} >
            <ul>
                <li> <a href='/home'> Home </a> </li>
                <li> <a href='/Leaderboard'> Leaderboard </a> </li>
            </ul>
        </div>
    );
};

export default MenuNav;