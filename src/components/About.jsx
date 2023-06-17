import React from "react";
import { Link } from "react-router-dom";
import Foto1 from "../assets/c-1.jpg";
import "../styles/about.css";
const About = () => {
  return (
    <div className="about">
      <h2>Nosotros</h2>
      <div className="container-about">
        <div className="item-about">
          <p>
            Somos una clinica de servicios a la salud bucodental, enfocada en el
            reestablecimiento de la funcionalidad sin dejar la parte estetica ,
            donde buscamos realmente la salud del paciente con trabajos en
            excelencia a un nivel poco visto en el mercado.
          </p>
          <Link to="/nosotros"> Nuestra historia</Link>
        </div>
        <div className="item-about">
          <img src={Foto1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
