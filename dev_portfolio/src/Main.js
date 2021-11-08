// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Contact from "./components/contact/contact";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'
// Importantando o component Habilidades
import Habilidades from "./components/habilidades/habilidades";
// Importantando o component Hobbies
import Hobbies from "./components/hobbies/hobbies";
// Importantando o component Galeria de fotos
import Courses from "./components/cursos/Courses";

import FormColecao from "./components/form/form";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/habilidades' component={Habilidades}/>
        <Route path='/hobbies' component={Hobbies}/>
        <Route path='/Courses' component={Courses}/>
        <Route path='/form' component={FormColecao}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;