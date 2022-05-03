import React,{Component} from "react";
import './style.css';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      numero: 0,
      comeca: 'Iniciar'
    }

    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);

  }

  iniciar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({comeca: 'Iniciar'})
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state); 
      },100);
      this.setState({comeca: 'Pausar' })
    }
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.comeca = "Iniciar";
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img"/>

        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.iniciar}>{this.state.comeca}</a>
          <a className="botao" onClick={this.limpar}>Limpar</a>
        </div>
      </div>
    );
  }
}

export default App;