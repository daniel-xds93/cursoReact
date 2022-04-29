import React, { Component } from 'react';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      form: {
        nome: 'Daniel',
        email: 'daneil.xdsx@gmail.com',
        senha: '',
        sexo: ''
      }
    }

   this.validaForms = this.validaForms.bind(this);

  }


  validaForms(e){
    //função para validar campos obrigatorios no formulario
    let frm = this.state.form;

    frm[e.target.name] = e.target.value;

    this.setState({form: frm});
  }

  render(){
    return (
      <div>
        <h2>Faça seu cadastro aqui</h2>

        <form>
          <div>
            <label>Nome</label>
            <input type="text" name="txtNome" value={this.state.form.nome} 
              onChange={this.validaForms} />
          </div>

          <div>
            Sexo:
            <select name="sexo" value={this.state.form.sexo} 
              onChange={this.validaForms}>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>

          <div>
            <label>E-mail</label>
            <input type="email" name="txtEmail" placeholder="username@provedor.com" 
            value={this.state.form.email} onChange={this.validaForms}/>
          </div>
          
          <div>
            <label>Senha</label>
            <input type="password" name="txtSenha" value={this.state.form.senha}
              onChange={this.validaForms} />
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
