import React, { Component } from 'react';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      email: "daniel.xds@hotmail.com",
      senha: '',
      sexo: 'Masculino'
    }

    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }

  trocaEmail(e){
    let novoEmail = e.target.value;
    this.setState({email: novoEmail});
  }

  trocaSexo(e){
    this.setState({sexo: e.target.value});
  }
  
  render(){
    return (
      <div>
        <div>
          <label>E-mail</label>
          <input type="email" name="txtEmail" placeholder="username@provedor.com" value={this.state.email}
          onChange={this.trocaEmail}/>
        </div>
        
        <div>
          <label>Senha</label>
          <input type="password" name="txtSenha" value={this.state.senha}
            onChange={(e)=>this.setState({senha: e.target.value}) } />
        </div>
        
        <div>
          Sexo:
          <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </div>

        <div>
          <div><strong>Seu e-mail:</strong> {this.state.email}</div>
          <div><strong>Sua senha:</strong> {this.state.senha}</div>
          <div><strong>Seu sexo:</strong> {this.state.sexo}</div>
        </div>
      </div>
    );
  }
}

export default App;
