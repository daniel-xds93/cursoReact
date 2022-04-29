import React, { Component } from "react";

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      feed:[
        { id: 1, username: "daniel.xds93", curtidas: 80, comentarios: 14 },
        { id: 2, username: "aprendendo.doinicio", curtidas: 210, comentarios: 143 },
        { id: 3, username: "vilma.nunes104", curtidas: 8, comentarios: 6 },
      ]
    };
  }

// map() -> faz a verredura no elemento.

  render(){
    return (
      <div>
        {this.state.feed.map((item)=>{
            return(
              // adicionei o key={item.id} -> pois é necessario uma chave unica de identificação para o item
              <div key={item.id}>
                <h3>{ item.username }</h3>
                <a>
                  {item.curtidas} curtidas / 
                  {item.comentarios} comentarios
                </a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
