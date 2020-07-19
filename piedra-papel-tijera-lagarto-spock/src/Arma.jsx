import React from 'react'
import './css/App.css';

function Arma ({nombre,handleSelection}) {

    return(
      <div className= {`arma-${nombre}`}> 
      
        <button id={`${nombre}`} type="button" className ="arma" 
            onClick={event =>
           handleSelection(nombre)} >
              {nombre}
        </button>
      </div>
    )
  
}

export default Arma;