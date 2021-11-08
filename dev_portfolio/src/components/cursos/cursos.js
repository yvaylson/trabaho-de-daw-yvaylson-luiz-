import React from "react";

const Curso = (props) => {
  return (
      <div class="col s3">
        <div class="card medium">
          <div class="card-image">
            <img class="activator" alt="" src= "https://materializecss.com/images/sample-1.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{props.titulo}<i class="material-icons right">more_vert</i></span>
            <p><a href="a">link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Descrição<i class="material-icons right">close</i></span>
            <p>{props.texto}</p>
          </div>
        </div>
      </div>
  );
};

export default Curso;