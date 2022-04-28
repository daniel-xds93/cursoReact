import React, {Component} from "react";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      statusNum: 2,
      statusBoolean: true
    };

    this.habilita = this.habilita.bind(this);
  }

  habilita(){
    this.setState({statusBoolean: true});
  }

  render(){
    return (
      <div>
        
        {this.state.statusNum === 1 &&
            <h1>Logado!!</h1>
        }

        <div>
          {
            this.state.statusBoolean ?
            <div>
              <h3>statusBoolean = true mostra isso</h3>
              <button onClick={() => this.setState({statusBoolean: false})}>Desabilitar</button>
            </div>
            :
            <div>
              <h3>statusBoolean = false mostra isso</h3>
              <button onClick={this.habilita}>Habilitar</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
