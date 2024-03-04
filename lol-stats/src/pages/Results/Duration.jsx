function Duration(props) {
    const { gameDuration } = props; 
    const dureeMinute = Math.floor(gameDuration / 60);
    const secondesRestantes = gameDuration - (Math.floor(gameDuration / 60) * 60);
    return (
        <>
            <h2>
                Durée de la partie : {dureeMinute} min {secondesRestantes} sec 
            </h2>
        </>
    )
}
export default Duration;