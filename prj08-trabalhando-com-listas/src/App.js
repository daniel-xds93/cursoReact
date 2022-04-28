import React, { Component } from "react";

class App extends Component() {
  
  constructor(props){
    super(props);

    this.state = {
      feedd:[
        { id: 1, username: "daniel.xds93", curtidas: 80, comentarios: 14 },
        { id: 2, username: "aprendendo.doinicio", curtidas: 210, comentarios: 143 },
        { id: 3, username: "vilma.nunes104", curtidas: 8, comentarios: 6 }
      ]
    };
  }

  render(){
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
