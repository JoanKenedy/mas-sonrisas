import React from "react";
import "../styles/casos.css";
import hero from "../assets/hero-casos.png";

const HeroCasos = () => {
  return (
    <div className="hero-casos">
      <div className="container-casos">
        <div className="item-casos" data-aos="fade-up" data-aos-duration="1000">
          <h2>Casos de éxito</h2>
          <img src={hero} alt="" data-aos="zoom-in" data-aos-duration="1000" />
        </div>
        <div
          className="item-casos"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3>Casos de éxito</h3>
          <p>La prueba de nuestro éxito , es nuestro excelente trabajo.</p>
          <a
            href="https://api.whatsapp.com/send?phone=525635757265"
            target="_blank"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroCasos;
