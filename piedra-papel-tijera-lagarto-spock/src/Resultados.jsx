import React from 'react'

import piedra from './images/piedra.png'
import papel from './images/papel.png'
import tijera from './images/tijera.png'
import lagarto from './images/lagarto.png'
import spock from './images/spock.png'
import corona from './images/corona.png'

function Resultados({jugador1,jugador2,partidaNueva,guardarGanador}) {
    
  
   
  function setGanador(jugador){
    return(<h2><b>{jugador}</b></h2>)
    }

 function eleccionDeGanador() {
    let ganador;
    if(jugador1===jugador2){
      guardarGanador('')
       ganador= setGanador("Empate!")
    }else if(jugador1==="Piedra") {
            if(jugador2==="Tijera" || jugador2=="Lagarto"){
              guardarGanador("jugador1")
              ganador=setGanador("Ganó Jugador 1")
            } else {
              guardarGanador("jugador2")
              ganador= setGanador("Ganó Jugador 2")}
          }else if(jugador1==="Papel"){
                   if(jugador2==="Spock"||jugador2==="Piedra") {
                    guardarGanador("jugador1")
                    ganador=setGanador("Ganó Jugador 1")
                   } else { 
                    guardarGanador("jugador2")
                     ganador=setGanador("Ganó Jugador 2")}
                }else if(jugador1==="Tijera"){
                        if(jugador2==="Lagarto"||jugador2==="Papel") {
                          guardarGanador("jugador1")
                            ganador=setGanador("Ganó Jugador 1")
                        } else { 
                          guardarGanador("jugador2")
                          ganador=setGanador("Ganó Jugador 2")}
                            } else if(jugador1==="Lagarto"){
                                      if(jugador2==="Spock"||jugador2==="Papel") {
                                        guardarGanador("jugador1")
                                        ganador=setGanador("Ganó Jugador 1")
                                      } else { 
                                          guardarGanador("jugador2")
                                          ganador=setGanador("Ganó Jugador 2")}
                                    } else if(jugador1==="Spock"){
                                              if(jugador2==="Tijera"||jugador2==="Piedra") {
                                               guardarGanador("jugador1")
                                               ganador=setGanador("Ganó Jugador 1")
                                              } else {
                                                guardarGanador("jugador2")
                                                ganador=setGanador("Ganó Jugador 2")}
                 
    }
    return ganador
  }
    
 
     
     const imagen1= <img src={
        jugador1 === "Piedra" ? piedra :
        jugador1 === "Papel" ? papel :
        jugador1 === "Tijera" ? tijera  :
        jugador1 === "Lagarto" ? lagarto : spock 
        } className="img-arma" alt= {jugador1}></img>
     
     const imagen2= <img src={
        jugador2 === "Piedra" ? piedra :
        jugador2 === "Papel" ? papel :
        jugador2 === "Tijera" ? tijera  :
        jugador2 === "Lagarto" ? lagarto : spock 
        } className="img-arma" alt= {jugador2}></img>

    const winner = eleccionDeGanador()
  
    return(
        <div className="background">
            <div className="resultados container">
              <h1>Resultados</h1>
              <div className="d-flex row res-container">
                <div className="col img1">{imagen1}</div>    
                <div className="col img2">{imagen2}</div>
              </div>
              <div className="row div-ganador">
                  {winner}
              </div>
              <div className="row div-button">
                <button type="button" className="btn btn-warning" onClick={e=>partidaNueva()}>Jugar otra vez</button>
              </div>
            </div>    
        </div>

    )
}
export default Resultados;