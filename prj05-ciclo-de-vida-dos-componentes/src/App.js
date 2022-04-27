import React, {Component} from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      hora: "15:43:00"
    };
  }

  // função que indica o que será feito depois que o component é montado
  componentDidMount(){
    // a linha abaixo indica que vamos começar um novo time
    setInterval(()=>{
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000);
  }

  // a função abaixo realiza uma ação a cada atualização
  componentDidUpdate(){
    console.log("Atualizou...");
  }

  // a função abaixo retorna true ou false -> caso queira ou nao atualizar
  /*shouldComponentUpdate(){
    console.log("atualizado...");
  }*/

  render(){
    return(
      <div>
        Horario atual: {this.state.hora} 
      </div>
    );
  }
}

export default App;