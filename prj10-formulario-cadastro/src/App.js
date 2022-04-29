import React, { Component } from 'react';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      nome: '',
      email: '',
      senha: '',
      errou: ''
    }

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(event){
    const {nome, email, senha} = this.state;

    if(nome !== '' && email !== '' && senha !== ''){
      alert(`Nome: ${nome}\nE-mail: ${email}\nSenha: ${senha}`);
    }else{
      this.setState({errou: 'Ops! Tem algum campo que não foi preenchido. :('})
    }


    // a linha abaixo não deixa atualizar a pagina apos dar ok
    event.preventDefault();

  }

  render(){
    return (
      <div>
        <h2>Faça seu cadastro</h2>
        
        {
          this.state.errou && <p>{this.state.errou}</p>
        }

        <form onSubmit={this.cadastrar}>
          <div>
            <label>Nome</label>
            <input type="text" name="txtNome" value={this.state.nome} 
              onChange={(e)=> this.setState({nome: e.target.value})} />
          </div>

          <div>
            <label>E-mail</label>
            <input type="email" name="txtEmail" placeholder="username@provedor.com" value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}/>
          </div>
          
          <div>
            <label>Senha</label>
            <input type="password" name="txtSenha" value={this.state.senha}
              onChange={(e)=>this.setState({senha: e.target.value}) } />
          </div>

          <div>
            <button type="submit">Cadastrar</button>
          </div>
      
        </form>
      </div>
    );
  }
}

export default App;
