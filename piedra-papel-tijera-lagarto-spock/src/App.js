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
import Resultados from './Resultados'

class App extends React.Component {
    constructor(){ 
      super()
      this.state = {
        mostrarResultados:false,
        jugador1: '',
        jugador2: '',
        dosJugadores: false,
        arma1:'',
        arma2:'',
        score1:0,
        score2:0,
      }
      this.handleSelection = this.handleSelection.bind(this)
      this.contiendaContraBot = this.contiendaContraBot.bind(this)
      this.handlePlay1=this.handlePlay1.bind(this)
      this.handlePlay2=this.handlePlay2.bind(this)   

      this.partidaNueva=this.partidaNueva.bind(this)
    }


     handleSelection =(arma,jugador)=> {
       if(jugador==="uno"){
      this.setState({
        jugador1: arma,
        arma1: arma
      })
      this.state.arma1=arma
    } else if(jugador==="dos") {
      this.setState({
        jugador2: arma,
        arma2: arma
      })
      this.state.arma2=arma
    }
  }

  handlePlay1(){
    const {jugador1, dosJugadores} = this.state
    if(jugador1===''){
     alert("Jugador 1 elige un arma!")
    } else{
      this.setState({
        jugador1:''
      })
      this.state.jugador1=''
      if(!dosJugadores){
       this.contiendaContraBot()             
      } else {
        this.refs.play1.setAttribute("disabled","disabled")
        
        document.getElementById("Piedra").disabled=true
        document.getElementById("Papel").disabled=true
        document.getElementById("Tijera").disabled=true
        document.getElementById("Lagarto").disabled=true
        document.getElementById("Spock").disabled=true

  
      }
      this.resultados()
    }
  }
  
  handlePlay2(){
    const {jugador2} = this.state
    if(jugador2===''){
      alert("Jugador 2 elige un arma!")
     } else{
      this.setState({jugador2:''})
      this.state.jugador2=''
      this.refs.play2.setAttribute("disabled","disabled")
      document.getElementById("Piedra2").disabled=true
      document.getElementById("Papel2").disabled=true
      document.getElementById("Tijera2").disabled=true
      document.getElementById("Lagarto2").disabled=true
      document.getElementById("Spock2").disabled=true
  }
  this.resultados()
}

  contiendaContraBot(){
    const armas= ["Piedra" ,"Papel" ,"Tijera" ,"Lagarto" ,"Spock"]
    const jugador2=  armas[Math.floor(Math.random() * armas.length)]
    this.handleSelection(jugador2, "dos")   
  
  }
  resultados(){
    const {arma1, arma2, jugador1,jugador2} = this.state

    if(jugador1==='' &&
       arma1!=='' &&
       jugador2=== '' &&
       arma2 !== ''){
        this.mostrarResultados()
       }
  }

  mostrarResultados = () => {
    this.setState({mostrarResultados:true})
  }

  partidaNueva = (dosJugadores) => {
    this.setState({
      mostrarResultados:false,
      jugador1:'',
      jugador2:'',
      arma1:'',
      arma2:'',
      dosJugadores:dosJugadores
    })
     if(this.state.dosJugadores){
      document.querySelectorAll(".button").forEach(elem => {
        elem.disabled = false;
    });
    }
  }
  componentDidUpdate(){
    console.log("updated", this.state)
  }

  render(){
    const {jugador1, jugador2, dosJugadores,mostrarResultados} = this.state
    

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
     let readyP2;
      if(!dosJugadores){
        readyP2=<button ref="play2" type="button" className="button btn btn-warning play2" onClick={e=>this.handlePlay2()} disabled>
                  Listo!
                </button>
      }else{
        readyP2=<button ref="play2" type="button" className="button btn btn-warning play2" onClick={e=>this.handlePlay2()}>
                  Listo!
                </button>

    }

    let gameMode;
      if(this.state.dosJugadores){
        gameMode = <button type="button" className="btn btn-warning" onClick={e=> this.setState({dosJugadores:false})}>1P</button>
      } else {
        gameMode = <button type="button" className="btn btn-warning" onClick={e=> this.setState({dosJugadores:true})}>2P</button>
      }


      return (
  <>      
    <div className="container-fluid">
        
      <div className="d-flex" >
         
        <div className="col container player"> 
          <div className="d-flex">
            <div className="armas">
              <Arma nombre="Piedra"  j="uno"  handleSelection={this.handleSelection}  />
              <Arma nombre="Papel"   j="uno"  handleSelection={this.handleSelection} />
              <Arma nombre="Tijera"  j="uno"  handleSelection={this.handleSelection}  />
              <Arma nombre="Lagarto" j="uno"  handleSelection={this.handleSelection}  />
              <Arma nombre="Spock"   j="uno"  handleSelection={this.handleSelection} />
            </div>
            <div className="seleccion">
              {seleccion}
            </div>
          </div>
          <button ref="play1" type="button" className="button btn btn-warning play1" onClick={e=>this.handlePlay1()}>
              Listo!
          </button>
        </div>
          
        <div className="col container player">
          <div className="d-flex">
            <div className="seleccion2">
              {seleccion2}
            </div>
            <div className="armas2">
              <Arma nombre="Piedra"  j="dos" dosJugadores={this.state.dosJugadores} handleSelection={ this.handleSelection} />
              <Arma nombre="Papel"   j="dos" dosJugadores={this.state.dosJugadores} handleSelection={ this.handleSelection} />
              <Arma nombre="Tijera"  j="dos" dosJugadores={this.state.dosJugadores} handleSelection={ this.handleSelection} />
              <Arma nombre="Lagarto" j="dos" dosJugadores={this.state.dosJugadores} handleSelection={ this.handleSelection} />
              <Arma nombre="Spock"   j="dos" dosJugadores={this.state.dosJugadores} handleSelection={ this.handleSelection} />
            </div>
          </div>  
          {readyP2}
        </div>
        {gameMode}
      </div>
    </div>
   {mostrarResultados && <Resultados jugador1={this.state.arma1} jugador2={this.state.arma2} partidaNueva={this.partidaNueva} dosJugadores={this.state.dosJugadores}/>}
   </> 
  );
  }
}
export default App;
