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
        dosJugadores: true,
        arma1:'',
        arma2:''
      }
      this.handleSelection = this.handleSelection.bind(this)
    }

     handleSelection =(arma,jugador)=> {
       if(jugador==="uno"){
      this.setState({
        jugador1: arma
      })
    } else {
      this.setState({
        jugador2: arma
      })
    }
    }

  handlePlay1(){
    if(this.state.jugador1===''){
     alert("Elige un arma!")
    } else{
      this.setState({
        arma1: this.state.jugador1,
        jugador1: ''})
      
      
      if(!this.state.dosJugadores){
        this.contiendaContraBot()             
      } else {
        this.refs.play1.setAttribute("disabled","disabled")
        this.refs.play2.removeAttribute("disabled")
        document.getElementById("Piedra").disabled=true
        document.getElementById("Papel").disabled=true
        document.getElementById("Tijera").disabled=true
        document.getElementById("Lagarto").disabled=true
        document.getElementById("Spock").disabled=true

        document.getElementById("Piedra2").disabled=false
        document.getElementById("Papel2").disabled=false
        document.getElementById("Tijera2").disabled=false
        document.getElementById("Lagarto2").disabled=false
        document.getElementById("Spock2").disabled=false
      }
      this.resultados()
    }
  }
  
  contiendaContraBot(){
    const armas= ["Piedra2" ,"Papel2" ,"Tijera2" ,"Lagarto2" ,"Spock2"]
    this.setState({
      jugador2: armas[Math.floor(Math.random() * armas.length)],
      arma2: this.state.jugador2
    })
  }

  resultados(){
    this.setState({
      ganador: ''
    })
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
        jugador2 === "Piedra" ? piedra :
        jugador2 === "Papel" ? papel :
        jugador2 === "Tijera" ? tijera  :
        jugador2 === "Lagarto" ? lagarto : spock 
        } className="img-arma-2" alt= {jugador2}></img>
      }

      return (
    <div className="container-fluid">
        
      <div className="d-flex">
         
        <div className="col container player1"> 
          <div className="d-flex">
            <div className="armas">
              <Arma nombre="Piedra"  j="uno" handleSelection={this.handleSelection}  />
              <Arma nombre="Papel"   j="uno" handleSelection={this.handleSelection} />
              <Arma nombre="Tijera"  j="uno" handleSelection={this.handleSelection}  />
              <Arma nombre="Lagarto" j="uno" handleSelection={this.handleSelection}  />
              <Arma nombre="Spock"   j="uno" handleSelection={this.handleSelection} />
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
              <Arma nombre="Piedra"  j="dos" handleSelection={this.handleSelection} />
              <Arma nombre="Papel"   j="dos" handleSelection={this.handleSelection} />
              <Arma nombre="Tijera"  j="dos" handleSelection={this.handleSelection} />
              <Arma nombre="Lagarto" j="dos" handleSelection={this.handleSelection} />
              <Arma nombre="Spock"   j="dos" handleSelection={this.handleSelection} />
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
