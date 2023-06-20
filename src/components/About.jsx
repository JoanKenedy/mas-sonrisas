import React from "react";
import { Link } from "react-router-dom";
import Foto1 from "../assets/team.jpg";
import "../styles/about.css";
const About = () => {
  return (
    <div className="about">
      <h2>Nosotros</h2>
      <div className="container-about">
        <div className="item-about">
          <p>
            Somos una clínica con un equipo de trabajo capacitado para resolver
            los problemas de salud bucal y devolver su sonrisa, enfocándonos en
            realizar diagnósticos adecuados para hacer tratamientos acertados,
            con materiales de última generación y alta calidad.
          </p>
          <p>
            ¿Deseas mejorar tu estética dental? Si tu respuesta es afirmativa,
            ¡has encontrado el lugar correcto para ti! En Mas sonrisas contamos
            con una variedad de tratamientos odontológicos que te brindarán la
            ayuda que necesitas para mejorar tu estética dental
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
