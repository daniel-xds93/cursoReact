import React,{Component} from "react";
import './style.css';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      numero: 0
    }

    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.parar = this.parar.bind(this);

  }

  iniciar(){
    this.timer = setInterval(()=>{
      let state = this.state;
      state.numero += 0.1;
      this.setState(state); 
    },100);
  }

  parar(){

  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img"/>

        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.iniciar}>Iniciar</a>
          <a className="botao" onClick={this.parar}>Parar</a>
        </div>
      </div>
    );
  }
}

export default App;