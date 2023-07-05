import React from "react";
import { Link } from "react-router-dom";
import Foto1 from "../assets/portada.jpg";
import "../styles/about.css";
const About = () => {
  return (
    <div className="about">
      <h2 data-aos="fade-up" data-aos-duration="1000">
        Nosotros
      </h2>
      <div className="container-about">
        <div className="item-about" data-aos="fade-up" data-aos-duration="1000">
          <p>
            Somos una clínica con un equipo de trabajo altamente capacitado para
            resolver los problemas de salud bucal y devolver tú sonrisa, nos
            enfocamos en realizar diagnósticos personalizados adecuados poniendo
            como prioridad , recuperar tu salud y la belleza de tu sonrisa.
          </p>
          <p>
            ¿Deseas mejorar tu estética dental? Si tu respuesta es afirmativa,
            ¡has encontrado el lugar correcto para ti!. En Más sonrisas contamos
            con la tecnología y especialidades adecuadas para solucionar todos
            los problemas estéticos que puedas tener, apoyándonos de todas las
            características faciales y dentolabiales de cada caso,
            personalizando tu sonrisa de una forma completamente natural y
            bella.
          </p>
          <Link to="/nosotros"> Nuestra historia</Link>
        </div>
        <div className="item-about" data-aos="fade-up" data-aos-duration="1000">
          <img src={Foto1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
