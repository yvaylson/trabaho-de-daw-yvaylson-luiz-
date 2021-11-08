// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre mim</h5>
        <Card>
          <div>
            <p><b>Historia</b></p>
            <p>Sou um aluno de Ti da instituição adventista unasp, estou no terceiro ano do ensino medio, tenho 17 anos e maior parte de meu conhecimento logico sobre linguagens de programação é voltada a linguagem Python</p>
          </div>
        </Card>
    </Col>
  </Row>
);

export default Home;