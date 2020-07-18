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
    const {jugador, bot} = this.state
   
    let 
     seleccion= <img src={
      jugador === "Piedra" ? piedra :
      jugador === "Papel" ? papel :
      jugador === "Tijera" ? tijera  :
      jugador === "Lagarto" ? lagarto : 
      jugador === "Spock" ? spock : none
      } className="img-arma" alt= {`${jugador}`}></img>

    let
      seleccion2=  <img src={
        bot === "Piedra" ? piedra :
        bot === "Papel" ? papel :
        bot === "Tijera" ? tijera  :
        bot === "Lagarto" ? lagarto : 
        bot === "Spock" ? spock : none
        } className="img-arma" alt= {`${bot}`}></img>
    
      return (
    <div className="container-fluid">
        
        <div className="d-flex ">
         <div className="col player-one"> 
          <div className="armas">
            <Arma nombre="Piedra" handleSelection={this.handleSelection} id="Piedra" />
            <Arma nombre="Papel" handleSelection={this.handleSelection} id="Papel"/>
            <Arma nombre="Tijera" handleSelection={this.handleSelection} id="Tijera" />
            <Arma nombre="Lagarto" handleSelection={this.handleSelection} id="Lagarto" />
            <Arma nombre="Spock" handleSelection={this.handleSelection} id="Spock"/>
          </div>
          <div className="seleccion">
            {seleccion}
          </div>
            <button  type="button" className="ready" onClick={e=> this.setState({jugador: ''})}>
              Listo!
            </button>
          </div>
          
         <div className="col player-two">
            <div className="seleccion2">
            {seleccion2}
            </div>  
         </div>
        
         
         
        </div>
          
  </div>
  );
  }
}
export default App;
