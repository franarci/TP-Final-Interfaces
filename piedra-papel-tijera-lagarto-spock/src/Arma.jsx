import React from 'react'
import './css/App.css';

class Arma extends React.Component {
  constructor(props){
    super(props)
    this.state={
        nombre:'',
        clicked:false
    }
  }

  
deselected(){
  this.setState({
    clicked:false
  })
}
  render(){
   
    return(
      <div className= {`arma-${this.props.nombre}`}> 
      
        <button id={`${this.props.nombre}`} type="button" className ="arma" 
            onClick={event =>
           this.props.handleSelection(this.props.nombre)} >
              {this.props.nombre}
        </button>
      </div>
    )
  }
}

export default Arma;