import React from "react";


const Equipe = (props) =>{
  return(
    <div>
      <Sobre nome={props.nome} idade={props.idade} cargo={props.cargo} insta={props.insta} 
        face={props.face} linkedin={props.linkedin} youtube={props.youtube} github={props.github} />
      <hr/>
    </div>
  );
}

const Sobre = (props) =>{
  return(
    <ul>
      <li>{props.nome}</li>
      <li>{props.idade}</li>
      <li>{props.cargo}</li>
      <li>Contatos
        <Social insta={props.insta} face={props.face} linkedin={props.linkedin} youtube={props.youtube} github={props.github}/></li>
    </ul>
  );
}

const  Social = (props) =>{
  return(
      <ul>
        <li><a href={props.insta} target="_blank">Instagram</a></li>
        <li><a href={props.face} target="_blank">Facebook</a></li>
        <li><a href={props.linkedin} target="_blank">LinkedIn</a></li>
        <li><a href={props.youtube} target="_blank">Youtube</a></li>
        <li><a href={props.github} target="_blank">GitHub</a></li>
      </ul>
  );
}

function App() {
  return (
    <div>
      <h2>Nossa equipe</h2>
      <Equipe nome="Daniel Xavier" idade="29" cargo="Analista Pleno" 
        insta="https://www.instagram.com/daniel.xds93/" 
        face="https://www.facebook.com/daniel.xds93" 
        linkedin="https://www.linkedin.com/in/daniel-xds93/" 
        youtube="https://www.youtube.com/channel/UCmarm4JOG_OjgfXk5frH9UA"
        github="https://github.com/daniel-xds93"
      />

      <Equipe nome="Aprendendo do início com Daniel" idade="29" cargo="Analista Pleno" 
        insta="https://www.instagram.com/aprendendo.doinicio/" 
        face="https://www.facebook.com/aprendendo.doinicio" 
        linkedin="https://www.linkedin.com/in/daniel-xds93/" 
        youtube="https://www.youtube.com/channel/UCmarm4JOG_OjgfXk5frH9UA"
        github="https://github.com/daniel-xds93"
      />
    </div>
  );
}

export default App;
