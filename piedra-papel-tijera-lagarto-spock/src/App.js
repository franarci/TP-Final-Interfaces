import React from 'react';
import './css/App.css';
import Arma from './Arma'

class App extends React.Component {
    constructor(){ 
      super()
      this.state = {
        jugador: '',
        bot: '',
        ganador: '',
      }
      this.handleSelection = this.handleSelection.bind(this)
    }

     handleSelection =(arma)=> {
      this.setState({
        jugador: arma
      })

    }

    componentDidUpdate(){
      console.log(this.state.jugador)
    }

    render(){
  return (
    <div className="container">
        <div id="titulo">     
          <a className= "titulo piedra">Piedra </a>
          <a className= "titulo papel">Papel </a> 
          <a className= "titulo tijera">Tijera </a> 
          <a className= "titulo lagarto">Lagarto </a> 
          <a className= "titulo spock">Spock</a>
        </div>    
        
        <div className="playground">
          <div className="armas">
          <Arma nombre="Piedra" handleSelection={this.handleSelection} id="piedra" />
          <Arma nombre="Papel" handleSelection={this.handleSelection} id="papel"/>
          <Arma nombre="Tijera" handleSelection={this.handleSelection} id="tijera" />
          <Arma nombre="Lagarto" handleSelection={this.handleSelection} id="lagarto" />
          <Arma nombre="Spock" handleSelection={this.handleSelection} id="spock"/>
          </div>
          <div className="seleccion">
            {this.state.jugador}
          </div>
        </div>
          
  </div>
  );
  }
}
export default App;
