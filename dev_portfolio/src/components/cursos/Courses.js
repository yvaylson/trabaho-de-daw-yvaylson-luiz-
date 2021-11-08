// 
import React from "react";
// 
import {Row,  Col, Button, Icon} from 'react-materialize';
//
import Curso from "./cursos";
//
import gambiarra from '../../images/B.jpg'

import { Link } from "react-router-dom";

const Courses = () => (
    <Row>
          <h5>Cursos</h5>
        <Col s={20} m={20}>
          <Curso
            titulo="criptomoeda"
            texto="Uma criptomoeda ou cibermoeda é um meio de troca, podendo ser centralizado ou descentralizado que se utiliza da tecnologia de blockchain e da criptografia para assegurar a validade das transações e a criação de novas unidades da moeda."
            images={gambiarra}/>
        
          <Curso
            titulo="contabilidade"
            texto="ciência teórica e prática que estuda os métodos de cálculo e registro da movimentação financeira de uma firma ou empresa."
            images={gambiarra}/>
          </Col>
          <Link to='/create/course'>
                <Button
                    className="black"
                    icon={<Icon>add</Icon>}
                    large
                    node="button"
                    onClick=""
                    />
            </Link>
    </Row>
  );
export default Courses