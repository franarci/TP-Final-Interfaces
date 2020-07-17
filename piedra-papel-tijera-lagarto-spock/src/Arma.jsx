import React from 'react'
import './css/App.css';

class Arma extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className= {`arma-${this.props.nombre}`}> 
        <button type="button" className ="arma" onClick={event => this.props.handleSelection(this.props.nombre)} >
              {this.props.nombre}
        </button>
      </div>
    )
  }
}

export default Arma;