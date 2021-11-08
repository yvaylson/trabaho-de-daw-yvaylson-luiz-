// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="teal">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="contact">Contact</NavLink></li>
      <li><NavLink to="habilidades">Habilidades</NavLink></li>
      <li><NavLink to="hobbies">Hobbies</NavLink></li>
      <li><NavLink to="Courses">Galeria de fotos</NavLink></li>
      <li><NavLink to="Courses">Galeria de fotos</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;