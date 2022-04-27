// trabalhando com class component é importado o component
import React, {Component} from "react";

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} idade={this.props.idade} email={this.props.email} 
        cargo={this.props.cargo} face={this.props.face} insta={this.props.insta} 
        linkedin={this.props.linkedin} youtube={this.props.youtube} git={this.props.git}
        />
        <hr/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <ul>
        <li><strong>Nome: </strong>{this.props.nome}</li>
        <li><strong>Idade: </strong>{this.props.idade}</li>
        <li><strong>E-mail: </strong>{this.props.email}</li>
        <li><strong>Cargo: </strong>{this.props.cargo}</li>
        <li>Contatos
          <Redes face={this.props.face} insta={this.props.insta} git={this.props.git}
            youtube={this.props.youtube} linkedin={this.props.linkedin}
          />
        </li>
      </ul> 
    );
  }
}

class Redes extends Component{
  render(){
    return(
      <ul>
        <li><a href={this.props.face} target="_blank">Facebook</a></li>
        <li><a href={this.props.insta} target="_blank">Instagram</a></li>
        <li><a href={this.props.linkedin} target="_blank">LinkedIn</a></li>
        <li><a href={this.props.youtube} target="_blank">Youtube</a></li>
        <li><a href={this.props.git} target="_blank">GitHub</a></li>
      </ul>
    );
  }
}

function App() {
  return (
    <div>
      <h2>Equipe conectividade:</h2>
      <Equipe nome="Daniel Xavier" idade="29" cargo="Analista Pleno" email="daniel.xdsx@gmail.com" 
        face="https://www.facebook.com/daniel.xds93" 
        insta="https://www.instagram.com/daniel.xds93/" 
        linkedin="https://www.linkedin.com/in/daniel-xds93/" 
        youtube="https://www.youtube.com/channel/UCmarm4JOG_OjgfXk5frH9UA" 
        git="https://github.com/daniel-xds93"
      />

      <Equipe nome="Aprendendo do início com Daniel" idade="29" cargo="Analista" email="aprendendodoinicio@gmail.com" 
        face="https://www.facebook.com/aprendendo.doinicio" 
        insta="https://www.instagram.com/aprendendo.doinicio/" 
        linkedin="https://www.linkedin.com/in/daniel-xds93/" 
        youtube="https://www.youtube.com/channel/UCmarm4JOG_OjgfXk5frH9UA" 
        git="https://github.com/daniel-xds93"
      />
    </div>
  );
}

export default App;
