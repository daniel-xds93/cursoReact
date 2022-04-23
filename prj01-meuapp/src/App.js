
// importando o react
import React from "react";

// stateless component => forma de criar um component na mesma tela.
  // obs: deve sempre iniciar com letra maiuscula
const Follow = () =>{
  return(
    <div>
      <h4>
        Siga nosso canal no youtube e nossas redes siciais...
      </h4>
    </div>
  );
}

// stateless component na mesma linha
const Autor = () => <h2>Daniel Xavier de Sousa</h2>;

// props -> aceita que passamos valores
const Curso = (props) => {
  return(
    <div>
      <strong>Curso:</strong> {props.nomeCurso}<br/>
      <strong>Carga horaria:</strong> {props.horas}
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Hello World</h1>
      <Autor/>
      <h3><a>Canal: Aprendendo do início com Daniel</a></h3>
      
      Lista de cursos:

      <Curso nomeCurso="Lógica de Programação" horas="35.5"/>
      <Curso nomeCurso="Excel Básico" horas="50"/>

      <p>Instagram: <a>@daniel.xds93</a> | <a>@aprendendo.doinicio</a></p>
    
      <Follow/>
    </div>
  );
}

// exportando um componente 
export default App;