import React from 'react'

function Resultados({jugador1,jugador2,partidaNueva,dosJugadores}) {
    console.log(dosJugadores)
    return(
        <div className="background">
            <div className="resultados">
                <div className="container res-container">
                     <button type="button" className="btn btn-warning" onClick={e=>partidaNueva(dosJugadores)}></button>
                </div>
            </div>    
        </div>

    )
}
export default Resultados;