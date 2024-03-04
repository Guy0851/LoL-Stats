import logo from '../images/Logo-LoL-Stats.webp'

function Logo ({toggleMenu}){
    return (
        <div className='logo-teemo' onClick={toggleMenu}>
                <img
                    className='logo-tamo'
                    src={logo}
                    alt="teemo-3D"
                    />
            </div>
    )
}

export default Logo;