import React, {Component} from "react";

class App extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      nome: 'Daniel',
      contador:0
    }

    // a linha abaixo permite a função add fazer enxergar apropriedade
    this.add = this.add.bind(this);

    // a linha abaixo permite a função subtrair enxergar a propriedade
    this.subtrair = this.subtrair.bind(this);
  }

  add(){
    let state = this.state;
    state.contador +=1;
    // a linha abaixo altera o estado do contador
    // this.setState({contador: 1}) -> aqui o valor fica fixo
    this.setState(state);
  }

  subtrair(){
    let state = this.state;
    state.contador -= 1;
    this.setState(state);
  }
  
  render(){
    return(
      <div>
        {this.state.nome}

        <h3>
          <button onClick={this.subtrair}>-</button>
           {this.state.contador} 
          <button onClick={this.add}>+</button>
        </h3>
      </div>
    )
  }
}

export default App;