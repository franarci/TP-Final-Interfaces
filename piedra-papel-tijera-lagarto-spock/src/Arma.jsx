import React from 'react'
import './css/App.css';

function Arma ({nombre,handleSelection,j,dosJugadores}) {

  if(j==="uno") {
    return(
      <div className= {`arma-${nombre} `}> 
            <button id={`${nombre}`} type="button" className ="button arma" 
                onClick={event =>
                  handleSelection(nombre,j)} >
                  {nombre}
        </button>
      </div>
          )
                } else if(dosJugadores){
                    return(
                      <div className= {`arma-${nombre} d-flex p2`}> 
                        <button id={`${nombre}2`} type="button" className ="button arma" 
                          onClick={event =>
                            handleSelection(nombre,j)} >
                            {nombre}
                        </button>
                      </div>
                    )
                                } else {
                                  return(
                                    <div className= {`arma-${nombre} row p2`}> 
                                      <button id={`${nombre}2`} type="button" className ="button arma" 
                                        onClick={event =>
                                          handleSelection(nombre,j)} disabled>
                                          {nombre}
                                      </button>
                                    </div>
                                  )
                                }
}

export default Arma;