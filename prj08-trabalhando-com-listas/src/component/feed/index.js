import React, {Component} from 'react';

class Feed extends Component{
    render(){
        return(
            // adicionei o key={this.props.id} -> pois é necessario uma chave unica de identificação para o item
            <div key={this.props.id}>
                <h3>{ this.props.username }</h3>
                <a>
                    {this.props.curtidas} { this.props.curtidas>1 ? "curtidas" : "curtida"} / 
                    {this.props.comentarios} {this.props.comentarios>1 ? "comentarios" : "comentário"}
                </a>
                <hr/>
            </div>
        );
    }
}

export default Feed;