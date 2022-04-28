// criei o index para saber que se não passar o nome do arquivo na importação ele busca o index.js
import React, {Component} from "react";

class Membro extends Component{

    constructor(props){
        super(props);

        this.state = {
            perfil: this.props.perfil,
            logado: this.props.logado
        }

        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        this.setState({logado: "está logado"});
    }


    render(){
        return(
            <div>
                
                Usuario logado: {this.props.nome}<br/>
                Perfil de usuário: {this.state.perfil}
                <p>{this.props.nome} {this.state.logado}</p>
                <p>
                    <button onClick={this.entrar}>Entrar</button>
                    <button onClick={() => this.setState({logado: "não está logado"})}>Sair</button>
                </p>
                <p>
                  obs: no botão de sair trabalhei com a função anônima  
                </p>
            </div>
        );
    }
}

// a linha abaixo exporta o membro
export default Membro;