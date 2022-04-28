import React, {Component} from "react";
// a linha abaixo importa o component Membro
//import Membro from './component/membro/Membro';

// importando component no exemplo acima eu passo o nome do arquivo 
// no exemplo abaixo eu apenas passo a pasta então ele retorna o index
import Membro from "./components/membro";

function App() {
  return (
    <div>
      <Membro nome="Daniel" perfil="ADM" logado="não está logado"/>
    </div>
  );
}

export default App;
