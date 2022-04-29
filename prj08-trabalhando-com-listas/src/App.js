import React, { Component } from "react";

//importando o meu component Feed
import Feed from './component/feed';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      feed:[
        { id: 1, username: "daniel.xds93", curtidas: 80, comentarios: 14 },
        { id: 2, username: "aprendendo.doinicio", curtidas: 210, comentarios: 143 },
        { id: 3, username: "vilma.nunes104", curtidas: 8, comentarios: 6 },
        { id: 4, username: "renanluis31", curtidas: 1, comentarios: 0 },
      ]
    };
  }

// map() -> faz a verredura no elemento.

  render(){
    return (
      <div>
        {
          this.state.feed.map((item)=>{
              return(
                  // adicionei o key={item.id} -> pois é necessario uma chave unica de identificação para o item
                <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios} />
              );
          })
        }
      </div>
    );
  }
}

export default App;
