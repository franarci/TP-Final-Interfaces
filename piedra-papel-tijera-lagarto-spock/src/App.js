import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Arma from './Arma';
import piedra from './images/piedra.png'
import papel from './images/papel.png'
import tijera from './images/tijera.png'
import lagarto from './images/lagarto.png'
import spock from './images/spock.png'
import none from './images/none.png'

class App extends React.Component {
    constructor(){ 
      super()
      this.state = {
        jugador1: '',
        jugador2: '',
        ganador: '',
        dosJugadores: false,
        arma1:'',
        arma2:''
      }
      this.handleSelection = this.handleSelection.bind(this)
    }

     handleSelection =(arma)=> {
      this.setState({
        jugador1: arma
      })
       
    }

  handlePlay1(){
    if(this.state.jugador1===''){
     alert("Elige un arma!")
    } else{
      this.setState({
        arma1: this.state.jugador1,
        jugador1: ''})
      this.refs.play1.setAttribute("disabled","disabled")
      
      if(!this.state.dosJugadores){
        this.contiendaContraBot()             
      }
    }
  }
  
  contiendaContraBot(){
    const armas= ["Piedra","Papel","Tijera","Lagarto","Spock"]
    this.setState({
      jugador2: armas[Math.floor(Math.random * armas.length)]
    })
    console.log(armas[Math.floor(Math.random * armas.length)])
  }

  render(){
    const {jugador1, jugador2} = this.state
   

    let 
     seleccion= <img src={
      jugador1 === "Piedra" ? piedra :
      jugador1 === "Papel" ? papel :
      jugador1 === "Tijera" ? tijera  :
      jugador1 === "Lagarto" ? lagarto : 
      jugador1 === "Spock" ? spock : none
      } className="img-arma" alt= {jugador1}></img>

   let seleccion2;

      if(jugador2===''){
       seleccion2=<img className="none" src={none}></img>
      } else{
        seleccion2=  <img src={
        jugador2 === "Piedra2" ? piedra :
        jugador2 === "Papel2" ? papel :
        jugador2 === "Tijera2" ? tijera  :
        jugador2 === "Lagarto2" ? lagarto : spock 
        } className="img-arma-2" alt= {jugador2}></img>
      }

      return (
    <div className="container-fluid">
        
      <div className="d-flex">
         
        <div className="col container player1"> 
          <div className="d-flex">
            <div className="armas">
              <Arma nombre="Piedra"  handleSelection={this.handleSelection} id="Piedra" />
              <Arma nombre="Papel"   handleSelection={this.handleSelection} id="Papel"/>
              <Arma nombre="Tijera"  handleSelection={this.handleSelection} id="Tijera" />
              <Arma nombre="Lagarto" handleSelection={this.handleSelection} id="Lagarto" />
              <Arma nombre="Spock"   handleSelection={this.handleSelection} id="Spock"/>
            </div>
            <div className="seleccion">
              {seleccion}
            </div>
          </div>
          <button ref="play1" type="button" className="btn btn-warning play1" onClick={e=>this.handlePlay1()}>
              Listo!
          </button>
        </div>
          
        <div className="col container player1">
          <div className="d-flex">
            <div className="seleccion2">
              {seleccion2}
            </div>
            <div className="armas2">
              <Arma nombre="Piedra2" rf="play2" handleSelection={this.handleSelection} id="Piedra">Piedra</Arma>
              <Arma nombre="Papel2"  rf="play2" handleSelection={this.handleSelection} id="Papel"/>
              <Arma nombre="Tijera2" rf="play2" handleSelection={this.handleSelection} id="Tijera" />
              <Arma nombre="Lagarto2"rf="play2" handleSelection={this.handleSelection} id="Lagarto" />
              <Arma nombre="Spock2"  rf="play2" handleSelection={this.handleSelection} id="Spock"/>
            </div>
          </div>  
          <button ref="play2" type="button" className="btn btn-warning play2" onClick={e=>this.handlePlay2()} disabled>
            Listo!
          </button>
        </div>
        
         
         
      </div>
          
    </div>
  );
  }
}
export default App;
